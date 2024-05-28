import Image from 'next/image'
import Link from 'next/link'

import { getAwards } from '@/sanity/sanity.requests'

import styles from './AwardGoodpods.module.css'

export default async function AwardGoodpods() {
	const awards = await getAwards()

	if (!awards || !awards.length) {
		return null
	}

	return (
		<div className={'pageRow'}>
			<div className="bubbled">
				{awards.map(award =>
					award.linkUrl ? (
						<Link key={award._id} href={award.linkUrl} target="_blank" className={styles.container}>
							<Image src={award.imageUrl} alt="goodpods" width={award.width} height={award.height} className={styles.img} />
						</Link>
					) : (
						<div key={award._id} className={styles.container}>
							<Image src={award.imageUrl} alt="goodpods" width={award.width} height={award.height} className={styles.img} />
						</div>
					)
				)}
			</div>
		</div>
	)
}
