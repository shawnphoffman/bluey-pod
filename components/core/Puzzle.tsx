import { generate } from '@sbj42/word-search-generator'

const height = 15
const width = 15

export default function Puzzle() {
	const options = {
		diagonals: true,
		width,
		height,
		minLength: 3,
		maxLength: undefined,
		words: [
			'Eric',
			'Henry',
			'Amanda',
			'Stella',
			'Bluey',
			'Bingo',
			'Bandit',
			'Chilli',
			'Muffin',
			'Socks',
			'Lucky',
			'Coco',
			'Snickers',
			'Rusty',
			'Mackenzie',
			'Indy',
			'Honey',
			'Jack',
			'Chloe',
			'Lila',
			'Buddy',
			'Calypso',
			'Luckys Dad',
			'Judo',
			'Winton',
			'Pretzel',
			'JeanLuc',
			'Alfie',
			'Missy',
			'Frisky',
			'Uncle Stripe',
			'Nana',
			'Grandad',
			'Uncle Rad',
			'Trixie',
			'Gruber',
			'Bella',
			'Calypso',
			'Wendy',
			'Doreen',
			'Fido',
		],
	}

	const puzzle = generate(options)
	const rowLooper = new Array(height).fill('')
	const colLooper = new Array(width).fill('')

	return (
		<div className="flex flex-col items-center gap-3 text-xl font-bold divide-y divide-brandBoxShadow">
			<div className="flex flex-col items-center justify-center w-fit">
				{rowLooper.map((_, i) => {
					return (
						<div className="flex flex-row items-center w-full max-w-screen-sm leading-relaxed" key={i}>
							{colLooper.map((_, j) => {
								return (
									<div key={`${i}${j}`} className="flex items-center justify-center w-10">
										{puzzle.get(j, i)}
									</div>
								)
							})}
						</div>
					)
				})}
			</div>
			<div className="flex flex-row flex-wrap justify-center max-w-3xl pt-3 gap-x-8 gap-y-2">
				{puzzle.words.map((word, i) => (
					<div key={word}>{word}</div>
				))}
			</div>
		</div>
	)
}
