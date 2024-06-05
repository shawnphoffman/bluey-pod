import Image from 'next/image'
import Link from 'next/link'

import colorAmanda from '@/app/images/coloring/color_amanda.png'
import colorEric from '@/app/images/coloring/color_eric.png'
import colorGuitar from '@/app/images/coloring/color_guitar.png'
import colorHenry from '@/app/images/coloring/color_henry.png'
import colorStella from '@/app/images/coloring/color_stella.png'
import Puzzle from '@/components/core/Puzzle'

export const revalidate = 604800 // in seconds

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
] as const

export default async function Activities() {
	return (
		<>
			<div className={'flex flex-col gap-4 w-full bubbled'}>
				<div className={'text-2xl font-bold'}>Coloring Pages</div>
				<div className={'flex flex-row justify-center overflow-hidden flex-wrap gap-2'}>
					{coloringPages.map(coloringPage => (
						<div className={'flex flex-col items-center'} key={coloringPage.png}>
							<Image className="rounded-lg" alt="" src={coloringPage.import} width={200} />
							<div className="flex flex-row gap-2">
								<Link
									href={coloringPage.png}
									target="_blank"
									className={'bg-brandText text-white p-2 rounded-[2rem] m-1 self-center w-16 leading-none'}
									prefetch={false}
								>
									PNG
								</Link>
								<Link
									href={coloringPage.pdf}
									target="_blank"
									className={'bg-brandText text-white p-2 rounded-[2rem] m-1 self-center w-16 leading-none'}
									prefetch={false}
								>
									PDF
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className={'flex-col gap-4 w-fit bubbled hidden md:flex'}>
				<div className={'text-2xl font-bold'}>Word Search</div>
				<Puzzle />
			</div>
		</>
	)
}
