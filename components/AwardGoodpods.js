import Image from 'next/image'

import styles from './AwardGoodpods.module.css'

export default function AwardGoodpods() {
	return (
		<div className={styles.container}>
			<a
				href="https://goodpods.com/leaderboard/top-100-shows-by-category/leisure/animation-and-manga?indie=false&period=week#33154622"
				target="_blank"
			>
				<Image
					src="https://storage.googleapis.com/goodpods-images-bucket/leaderboard_badges/leisure_animation-and-manga_top10_week.png"
					alt="goodpods"
					width={250}
					height={77}
					className={styles.img}
				/>
			</a>
			<a
				href="https://goodpods.com/leaderboard/top-100-shows-by-category/leisure/animation-and-manga"
				className={styles.link}
				target="_blank"
			>
				Goodpods Top 100 Animation & Manga Podcasts
			</a>
			{/* <a href="https://goodpods.com/podcasts/dinner-with-the-heelers-a-bluey-podcast-277737" className={styles.link} target="_blank">
				Listen now to Dinner with the Heelers - A Bluey Podcast
			</a> */}
		</div>
	)
}
