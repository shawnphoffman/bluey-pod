import { memo } from 'react'

import styles from './Ratings.module.css'

const dataUrl = 'https://api.shawn.party/api/bluey-pod/reviews'

export const revalidate = 3600

async function getData() {
	try {
		const res = await fetch(dataUrl, { next: { revalidate: 3600 } })
		const data = await res.json()
		const { rating, ratingsUrl } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
		}
	} catch {
		return {}
	}
}

const Ratings = async () => {
	const data = await getData()

	if (!data || !data.appleRating) return null

	return (
		<div className={styles.outer}>
			<a className={styles.container} href={data.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
				<div>{data.appleRating}</div>
				<i className={`fa-solid fa-star-sharp ${styles.star}`} title="Stars" />
				<div>on Apple Podcasts</div>
			</a>
		</div>
	)
}

export default memo(Ratings)
