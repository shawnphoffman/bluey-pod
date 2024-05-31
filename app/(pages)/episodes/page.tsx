import { XMLParser } from 'fast-xml-parser'
import { sanitize } from 'isomorphic-dompurify'

import { rssFeedUrl } from '@/app/(pages)/(links)/links'
import Episodes from '@/components/core/Episodes'

async function getEpisodes() {
	try {
		// await new Promise(resolve => setTimeout(resolve, 5000))
		const res = await fetch(rssFeedUrl, {
			next: { tags: ['episodes'] },
		})
		console.log('FETCHED EPISODES', res.status)
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

// NOTE Loading.tsx wraps Pages in Suspense but it seems to only work when it is nested and not the root Loading component

export default async function EpisodesPage() {
	const [data] = await Promise.all([
		//
		getEpisodes(),
		// new Promise(resolve => setTimeout(resolve, 1000)),
	])
	return <Episodes episodes={data.episodes} />
}
