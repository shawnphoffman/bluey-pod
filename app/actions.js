'use server'

import { XMLParser } from 'fast-xml-parser'
import { sanitize } from 'isomorphic-dompurify'

export async function getReviews() {
	try {
		const res = await fetch('https://api.shawn.party/api/bluey-pod/reviews', { next: { revalidate: 60 * 60 * 1 } })
		const data = await res.json()
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch {
		return {}
	}
}

export async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${'https://open.spotify.com/show/01RC12mzSlrKmYYe2pjxgM'}`, {
			next: { revalidate: 60 * 60 * 1 },
		})
		const data = await res.json()
		// console.log('getSpotifyReviews', data)
		return data
	} catch {
		return {}
	}
}

export async function getEpisodes() {
	console.log('FETCHING EPISODES')
	try {
		const res = await fetch('https://anchor.fm/s/bdcbfb70/podcast/rss', {
			next: { revalidate: 60 * 60 * 1 },
		})
		const xml = await res.text()
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
		})
		const parsed = parser.parse(xml)
		const episodes = parsed.rss.channel.item.map(ep => ({
			guid: ep.guid['#text'],
			title: ep.title,
			imgSrc: ep['itunes:image']['@_href'],
			// summary: ep['itunes:summary'],
			summary: sanitize(ep['itunes:summary'].replace(/<p><br><\/p>|\n/gim, '')),
			link: ep.link,
			pubDate: ep.pubDate,
		}))
		return {
			episodes,
		}
	} catch (error) {
		return {}
	}
}
