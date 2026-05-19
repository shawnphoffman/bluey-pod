import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { Suspense } from 'react'

import { AwardsScrape, RatingsApple, RatingsGoodpods, RatingsSpotify } from '@shawnphoffman/pod-sites-shared/ratings'

import { getAppleReviews } from '@/app/actions'
import LinkCard from '@/components/core/LinkCard'
import Reviews from '@/components/core/Reviews'

import items, { appleRatingUrl, goodpodsUrl, spotifyUrl } from './links'

const appleClassName =
	'flex flex-row items-center px-2 py-1 text-sm font-bold leading-normal text-white border-4 rounded-lg whitespace-nowrap bg-applepodcasts bubble-border'
const goodpodsClassName =
	'flex flex-row items-center px-2 py-1 text-sm font-bold leading-normal text-black border-4 rounded-lg whitespace-nowrap bg-goodpods bubble-border'
const spotifyClassName =
	'flex flex-row items-center px-2 py-1 text-sm font-bold leading-normal text-white border-4 rounded-lg bubble-border whitespace-nowrap bg-spotify'

export default async function Home() {
	return (
		<>
			<div className={'text-base sm:text-lg w-full max-w-screen-md bubbled'}>
				Our family loves Bluey! Mom, Dad, and our two kids talk about each episode of Bluey, starting with the very first episode and
				continuing in order as they appear on Disney+. We discuss the events of the episodes, plus touch on what lessons we&apos;ve learned
				from. It&apos;s good family fun for anyone who loves Bluey.
			</div>

			<Suspense fallback={<div className="h-10" />}>
				<div className="flex flex-row flex-wrap items-center justify-center gap-3">
					<RatingsApple
						appleRatingUrl={appleRatingUrl}
						getReviews={getAppleReviews}
						className={appleClassName}
						starIcon={faStarSharp}
					/>
					<RatingsGoodpods goodpodsUrl={goodpodsUrl} className={goodpodsClassName} starIcon={faStarSharp} />
					<RatingsSpotify spotifyUrl={spotifyUrl} className={spotifyClassName} starIcon={faStarSharp} />
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
				<AwardsScrape goodpodsUrl={goodpodsUrl} />
			</Suspense>

			<Suspense>
				<Reviews />
			</Suspense>
		</>
	)
}
