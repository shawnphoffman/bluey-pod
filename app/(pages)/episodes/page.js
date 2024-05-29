import { Suspense } from 'react'

import { getEpisodes } from '@/app/actions'
import Loading from '@/components/core/Loading'
import Episodes from '@/components/Episodes/Episodes'

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
			<Suspense fallback={<Loading />}>
				<EpisodesClient />
			</Suspense>
		</div>
	)
}
