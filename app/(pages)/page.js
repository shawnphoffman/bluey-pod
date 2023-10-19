import { memo } from 'react'

import styles from 'app/Global.module.css'
import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'

const Home = () => {
	return (
		<>
			<div className={styles.pageDescription}>
				Our family loves Bluey! Mom, Dad, and our two kids talk about each episode of Bluey, starting with the very first episode and
				continuing in order as they appear on Disney+. We discuss the events of the episodes, plus touch on what lessons we&apos;ve learned
				from. It&apos;s good family fun for anyone who loves Bluey.
			</div>
			<Ratings />
			<div className={styles.pageRow}>
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

			<div className={styles.pageRow}>
				<Reviews />
			</div>
		</>
	)
}

export default memo(Home)
