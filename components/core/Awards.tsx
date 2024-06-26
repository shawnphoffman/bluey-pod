import Image from 'next/image'
import Link from 'next/link'

import { getAwards } from '@/sanity/sanity.requests'

export default async function Awards() {
	const awards = await getAwards()

	// console.log('Awards.awards', awards)

	if (!awards || !awards.length) {
		return null
	}

	return (
		<div className="flex flex-row flex-wrap justify-center flex-1 gap-2 gap-y-0.5 items-center bubbled">
			{awards.map(award =>
				award.linkUrl ? (
					<Link key={award._id} href={award.linkUrl} target="_blank" className={`flex flex-col items-center`} aria-label={award.name}>
						<Image src={award.imageUrl} alt="" width={award.width} height={award.height} />
					</Link>
				) : (
					<div key={award._id} className={`flex flex-col items-center`}>
						<Image src={award.imageUrl} alt="" width={award.width} height={award.height} />
					</div>
				)
			)}
		</div>
	)
}
