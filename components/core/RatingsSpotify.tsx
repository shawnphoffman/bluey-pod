import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { spotifyUrl } from '@/app/(pages)/(links)/links'

type SpotifyRating = {
	url: string
	rating: number
	ratingCount?: number
}

export default async function RatingsSpotify() {
	// await new Promise(resolve => setTimeout(resolve, 5000))

	let spotifyData: SpotifyRating
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 1 },
		})
		spotifyData = await res.json()
	} catch {
		return null
	}

	if (!spotifyData?.rating) {
		return null
	}

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-base font-bold leading-normal text-white border-4 rounded-lg bubble-border whitespace-nowrap bg-spotify"
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
