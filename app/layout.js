import 'app/global.css'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import groupImg from 'app/images/group-clean.png'
import titleSvg from 'app/images/title-solid.svg'
import ActiveLink from 'components/ActiveLink'

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

export default async function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				<script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" defer></script>
				<meta name="apple-itunes-app" content="app-id=1648081856" />
			</head>
			<body>
				<div className="scroller">
					<div className={'wrapper'}>
						<div className={'page'}>
							<div className={'header'}>
								<Image className={'imageFamily'} alt="" src={groupImg} width={300} priority />
								<Image className={'imageTitle'} alt="Dinner with the Heelers" src={titleSvg} width={300} priority />
								<div className="navContainer bubbled">
									<ActiveLink href="/" label="Links" />
									<ActiveLink href="/episodes" label="Episodes" />
									<ActiveLink href="/activities" label="Activities" />
									<ActiveLink href="/listen-now" label="Listen Now" />
								</div>
							</div>
							<div className={'pageDetails'}>{children}</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
