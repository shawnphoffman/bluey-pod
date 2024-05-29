import { getAppleReviews } from '@/app/actions'
import Stars from '@/components/core/Stars'

const badWords = ['covid']

type Review = {
	title: string
	author: string
	stars: string
	text: string
}

export default async function Reviews() {
	const { reviews } = await getAppleReviews()

	if (!reviews) return null

	const filteredReviews = reviews.reduce((memo, acc) => {
		if (acc.stars !== '5' && !!process.env.VERCEL_URL) {
			return memo
		}
		if (badWords.some(badWord => acc.text.toLowerCase().includes(badWord))) {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews || !filteredReviews.length) return null

	return (
		<div className="max-w-full bubbled">
			<div className="mt-0 mb-3 text-2xl font-bold">Recent Reviews</div>
			{filteredReviews.map((r: Review) => (
				<div key={r.title} className="flex flex-col justify-start w-full gap-1 p-2 text-base text-left border-t-2 border-t-offBg">
					<div className="flex flex-row items-center justify-between">
						<div className="flex flex-col items-start gap-1 sm:gap-4 sm:flex-row sm:items-center">
							<div className="font-bold">{`"${r.title}"`}</div>
							{/* <div className="text-xs italic text-brand1"> {r.author}</div> */}
						</div>
						<Stars count={r.stars} />
					</div>
					<div className="px-2 pb-0 text-xs leading-normal break-words text-pretty">{r.text}</div>
				</div>
			))}
		</div>
	)
}
