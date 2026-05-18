import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { spotifyUrl } from '@/app/(pages)/(links)/links'

type SpotifyRating = {
	url: string
	rating?: number
	ratingCount?: number
}

// Utility function to add a hard timeout to fetch calls. Uses Promise.race so
// we stop waiting at `timeout`ms even if the fetch implementation ignores the
// AbortSignal (which can happen with some runtimes / Next.js fetch wrappers).
async function fetchWithTimeout(url: string, options: RequestInit & { timeout?: number } = {}) {
	const { timeout = 10000, ...fetchOptions } = options

	const controller = new AbortController()

	let timeoutId: ReturnType<typeof setTimeout> | undefined
	const timeoutPromise = new Promise<never>((_, reject) => {
		timeoutId = setTimeout(() => {
			controller.abort()
			reject(new Error(`Request timeout after ${timeout}ms`))
		}, timeout)
	})

	const fetchPromise = fetch(url, {
		...fetchOptions,
		signal: controller.signal,
	})
	// Swallow any late rejection (e.g. AbortError that fires after the race has
	// already been won by timeoutPromise) so it doesn't surface as an unhandled
	// promise rejection and crash the Node process.
	fetchPromise.catch(() => {})

	try {
		const response = await Promise.race([fetchPromise, timeoutPromise])
		return response
	} catch (error) {
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error(`Request timeout after ${timeout}ms`)
		}
		throw error
	} finally {
		if (timeoutId) clearTimeout(timeoutId)
	}
}

async function fetchWithRetry(url: string, options: RequestInit & { timeout?: number; retries?: number } = {}) {
	const { retries = 2, ...fetchOptions } = options
	let lastError: Error | null = null

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			return await fetchWithTimeout(url, fetchOptions)
		} catch (error) {
			lastError = error instanceof Error ? error : new Error(String(error))

			if (attempt === retries) {
				break
			}

			const delay = Math.min(1000 * Math.pow(2, attempt), 5000)
			await new Promise(resolve => setTimeout(resolve, delay))
		}
	}

	throw lastError || new Error('Request failed after all retries')
}

async function getSpotifyReviews(): Promise<SpotifyRating | null> {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/spotify-scrape?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Spotify API error: ${res.status} ${res.statusText}`)
			return null
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Spotify API returned empty response')
			return null
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Spotify API returned error message:', text)
			return null
		}

		const data = JSON.parse(text)
		return {
			url: data?.url,
			rating: data?.vals?.rating ? Number(data?.vals?.rating) : undefined,
		}
	} catch (error) {
		console.warn('Failed to fetch Spotify data', error)
		return null
	}
}

export default async function RatingsSpotify() {
	const spotifyData = await getSpotifyReviews()

	if (!spotifyData?.rating) {
		return null
	}

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-sm font-bold leading-normal text-white border-4 rounded-lg bubble-border whitespace-nowrap bg-spotify"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={'fa-solid fa-star-sharp' as IconProp} className="text-xs mx-0.5" />
			<div>on Spotify</div>
		</a>
	)
}
