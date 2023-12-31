import { memo } from 'react'

import ActiveLink from 'components/ActiveLink/ActiveLink'

import styles from './NavBar.module.css'

const NavBar = () => {
	return (
		<div className={styles.container}>
			<ActiveLink href="/" activeClassName={styles.active}>
				<div className={styles.styledLink}>Links</div>
			</ActiveLink>
			<ActiveLink href="/episodes" activeClassName={styles.active}>
				<div className={styles.styledLink}>Episodes</div>
			</ActiveLink>
			<ActiveLink href="/activities" activeClassName={styles.active}>
				<div className={styles.styledLink}>Activities</div>
			</ActiveLink>
			<ActiveLink href="/listen-now" activeClassName={styles.active}>
				<div className={styles.styledLink}>Listen Now</div>
			</ActiveLink>
		</div>
	)
}

export default memo(NavBar)
