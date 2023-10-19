import { memo } from 'react'
import Image from 'next/image'

import styles from 'app/Global.module.css'
import colorAmanda from 'app/images/coloring/color_amanda.png'
import colorEric from 'app/images/coloring/color_eric.png'
import colorGuitar from 'app/images/coloring/color_guitar.png'
import colorHenry from 'app/images/coloring/color_henry.png'
import colorStella from 'app/images/coloring/color_stella.png'

const coloringPages = [
	{
		import: colorHenry,
		png: '/color_henry.png',
		pdf: '/color_henry.pdf',
	},
	{
		import: colorStella,
		png: '/color_stella.png',
		pdf: '/color_stella.pdf',
	},
	{
		import: colorAmanda,
		png: '/color_amanda.png',
		pdf: '/color_amanda.pdf',
	},
	{
		import: colorEric,
		png: '/color_eric.png',
		pdf: '/color_eric.pdf',
	},
	{
		import: colorGuitar,
		png: '/color_guitar.png',
		pdf: '/color_guitar.pdf',
	},
]

const Activities = () => {
	return (
		<>
			<div className={styles.activities}>
				<div className={styles.activityTitle}>Coloring Pages</div>
				<div className={styles.activityList}>
					{coloringPages.map(coloringPage => (
						<div className={styles.activity} key={coloringPage.import}>
							<Image alt="" src={coloringPage.import} width={200} />
							<a href={coloringPage.png} target="_blank" className={styles.activityLink}>
								PNG
							</a>
							<a href={coloringPage.pdf} target="_blank" className={styles.activityLink}>
								PDF
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default memo(Activities)
