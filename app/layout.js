import 'styles/globals.css'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

import titleLogo from 'app/dwth.webp'
import styles from 'app/Global.module.css'
import NavBar from 'components/NavBar/NavBar'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Dinner with the Heelers',
	description:
		"Our family loves Bluey! Mom, Dad, and our two kids talk about each episode of Bluey, starting with the very first episode and continuing in order as they appear on Disney+. We discuss the events of the episodes, plus touch on what lessons we've learned from. It's good family fun for anyone who loves Bluey.",
	metadataBase: 'https://theblueypodcast.com',
	openGraph: {
		title: 'Dinner with the Heelers: The Bluey Podcast',
		description: '',
		url: 'https://theblueypodcast.com',
		locale: 'en_US',
		type: 'website',
	},
}

export const runtime = 'edge'

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body>
				<div className="scroller">
					<div className={styles.wrapper}>
						<div className={styles.page}>
							<div className={styles.header}>
								{/* <Image className={styles.headerLogo} alt="Dinner with the Heelers" src={titleLogo} width={450} height={450} priority /> */}
								<Image className={styles.headerLogo} alt="Dinner with the Heelers" src={titleLogo} width={300} height={300} priority />
								<NavBar />
							</div>
							<div className={styles.pageDetails}>{children}</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
