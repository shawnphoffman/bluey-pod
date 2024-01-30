import Image from 'next/image'

import styles from './Episodes.module.css'

const options = { year: 'numeric', month: 'long', day: 'numeric' }

export default async function Episode({ episode }) {
	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{episode.title}</h2>
			<div className={styles.detailsContainer}>
				<Image src={episode.imgSrc} alt={episode.title} className={styles.cover} width={100} height={100} />
				<div className={styles.summary}>
					<div className={styles.pubDate} suppressHydrationWarning>
						Posted: {pubDate}
					</div>
					<div dangerouslySetInnerHTML={{ __html: episode.summary }}></div>
					<a className={styles.link} href={episode.link} target="_blank">
						Episode Link
					</a>
				</div>
			</div>
		</div>
	)
}
