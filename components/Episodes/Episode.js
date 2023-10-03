'use client'

import { memo } from 'react'
import { sanitize } from 'isomorphic-dompurify'

import styles from './Episodes.module.css'

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const Episodes = ({ episode }) => {
	const clean = sanitize(episode.summary.replace(/<p><br><\/p>|\n/gim, ''))
	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{episode.title}</h2>

			<div className={styles.detailsContainer}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={episode.imgSrc} alt={episode.title} className={styles.cover} />
				<div className={styles.summary}>
					<div className={styles.pubDate} suppressHydrationWarning>
						Posted: {pubDate}
					</div>
					<div dangerouslySetInnerHTML={{ __html: clean }}></div>
					<a className={styles.link} href={episode.link}>
						Episode Link
					</a>
				</div>
			</div>
		</div>
	)
}

export default memo(Episodes)
