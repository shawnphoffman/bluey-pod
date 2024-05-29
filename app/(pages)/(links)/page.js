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
			<div className={'pageDescription bubbled'}>
				Our family loves Bluey! Mom, Dad, and our two kids talk about each episode of Bluey, starting with the very first episode and
				continuing in order as they appear on Disney+. We discuss the events of the episodes, plus touch on what lessons we&apos;ve learned
				from. It&apos;s good family fun for anyone who loves Bluey.
			</div>
			<div className="ratingsWrapper">
				<Suspense>
					<RatingsApple />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className={'pageRow gap-4'}>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.href}
							icon={item.icon}
							cover={item.image}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>

			{/* {process.env.NODE_ENV !== 'development' && ( */}
			<Suspense>
				<Awards />
			</Suspense>
			{/* )} */}

			<div className={'pageRow'}>
				<Reviews />
			</div>
		</>
	)
}
