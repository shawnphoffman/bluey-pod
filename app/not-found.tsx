import { faArrowRight } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-4 mt-2">
			<div className="flex flex-col w-full max-w-lg gap-2 p-4 px-8 mb-8 text-left border rounded-lg bubbled">
				<h1 className="text-6xl font-bold text-brandText">Uh oh...</h1>
				<Link
					href="/"
					className="flex flex-row items-center justify-center gap-2 text-2xl font-bold underline transition-colors ease-in text-brandOrange w-fit decoration-transparent hover:decoration-brandOrange"
				>
					<span>Return home</span>
					<FontAwesomeIcon icon={faArrowRight} />
				</Link>
			</div>
		</div>
	)
}
