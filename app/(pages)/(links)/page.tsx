import { Suspense } from 'react'

import Awards from '@/components/core/Awards'
import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/core/Reviews'

import items from './links'

export default async function Home() {
	// await new Promise(resolve => setTimeout(resolve, 5000))
	return (
		<>
			<div className={'text-base sm:text-lg w-full max-w-screen-md bubbled'}>
				Our family loves Bluey! Mom, Dad, and our two kids talk about each episode of Bluey, starting with the very first episode and
				continuing in order as they appear on Disney+. We discuss the events of the episodes, plus touch on what lessons we&apos;ve learned
				from. It&apos;s good family fun for anyone who loves Bluey.
			</div>

			<Suspense>
				<div className="flex flex-row flex-wrap items-center justify-center gap-2">
					<RatingsApple />
					<RatingsSpotify />
				</div>
			</Suspense>

			<div className={'flex flex-row justify-center flex-wrap flex-1 w-full gap-4'}>
				{items.map(item => {
					return (
						<LinkCard
							key={item.title}
							title={item.title}
							link={item.href}
							icon={item.icon}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>

			<Suspense>
				<Awards />
			</Suspense>

			<Suspense>
				<Reviews />
			</Suspense>
		</>
	)
}
