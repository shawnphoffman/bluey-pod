import Image from 'next/image'

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

export default async function Activities() {
	return (
		<div className={'activities bubbled'}>
			<div className={'activityTitle'}>Coloring Pages</div>
			<div className={'activityList'}>
				{coloringPages.map(coloringPage => (
					<div className={'activity'} key={coloringPage.png}>
						<Image alt="" src={coloringPage.import} width={200} />
						<a href={coloringPage.png} target="_blank" className={'activityLink'}>
							PNG
						</a>
						<a href={coloringPage.pdf} target="_blank" className={'activityLink'}>
							PDF
						</a>
					</div>
				))}
			</div>
		</div>
	)
}
