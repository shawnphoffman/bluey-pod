import { Suspense } from 'react'

import { getEpisodes } from '@/app/actions'
import Episodes from '@/components/core/Episodes'
import Loading from '@/components/core/Loading'

export const revalidate = 60 * 60 // 1 hour
export const dynamic = 'force-dynamic'

const EpisodesClient = async () => {
	const [data] = await Promise.all([
		getEpisodes(),
		// new Promise(resolve => setTimeout(resolve, 100000)),
	])

	return <Episodes episodes={data.episodes} />
}

export default async function EpisodesPage() {
	return (
		<Suspense fallback={<Loading />}>
			<EpisodesClient />
		</Suspense>
	)
}
