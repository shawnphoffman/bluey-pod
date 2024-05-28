import Image from 'next/image'

import styles from './AwardGoodpods.module.css'

export default function AwardGoodpods() {
	const goodpodsUrl = process.env.NEXT_PUBLIC_GOODPODS_URL
	const goodpodsBadgeUrl = process.env.NEXT_PUBLIC_GOODPODS_BADGE_URL

	if (!goodpodsUrl || !goodpodsBadgeUrl) {
		return null
	}

	return (
		<div className={'pageRow'}>
			<div className="bubbled">
				<a href={goodpodsUrl} target="_blank" className={styles.container}>
					<Image src={goodpodsBadgeUrl} alt="goodpods" width={250} height={77} className={styles.img} />
				</a>
			</div>
		</div>
	)
}
