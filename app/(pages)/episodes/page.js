import { Suspense } from 'react'

import { getEpisodes } from '@/app/actions'
import Episodes from '@/components/Episodes/Episodes'
import Loading from '@/components/Loading'

export const revalidate = 60 * 60 // 1 hour
export const dynamic = 'force-dynamic'

const EpisodesClient = async () => {
	const [data] = await Promise.all([
		getEpisodes(),
		//
		// new Promise(resolve => setTimeout(resolve, 100000)),
	])

	return <Episodes episodes={data.episodes} />
}

export default async function EpisodesPage() {
	return (
		<div className="episodesContainer">
			<Suspense fallback={<Loading label="episode-page" />}>
				<EpisodesClient />
			</Suspense>
		</div>
	)
}
