import '@/app/global.css'
import '@/app/(pages)/icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import groupImg from '@/app/images/group-clean.png'
import titleSvg from '@/app/images/title-solid.svg'
import ActiveLink from '@/components/core/ActiveLink'

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
		<html lang="en" className="box-border h-full p-0 m-0 text-base bg-offBg w-dvw" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				<meta name="apple-itunes-app" content="app-id=1648081856" />
			</head>
			<body className="h-full p-0 m-0 w-dvw">
				{/* SCROLLER */}
				<div className="w-full h-full px-3 mx-auto overflow-x-hidden overflow-y-scroll sm:px-4">
					{/* CONTENT */}
					<div className="flex flex-col w-full max-w-screen-lg min-h-screen gap-4 p-0 pb-4 mx-auto">
						{/* HEADER */}
						<div className="flex flex-col items-center text-center">
							<Image className="relative -mb-8 max-sm:hidden top-1 -z-10" alt="" src={groupImg} width={300} priority />
							<Image className="relative mb-4 sm:-mb-2 top-2 sm:-top-5" alt="Dinner with the Heelers" src={titleSvg} width={300} priority />
							{/* NAV */}
							<div className="flex flex-row flex-wrap justify-center bubbled gap-x-4">
								<ActiveLink href="/" label="Links" />
								<ActiveLink href="/episodes" label="Episodes" />
								<ActiveLink href="/activities" label="Activities" />
								<ActiveLink href="/listen-now" label="Listen Now" />
							</div>
						</div>
						{/* PAGE CONTENT */}
						<div className="flex flex-col items-center flex-1 gap-4 text-center">{children}</div>
					</div>
				</div>
				{process.env.VERCEL_ENV === 'production' && <Analytics />}
			</body>
		</html>
	)
}
