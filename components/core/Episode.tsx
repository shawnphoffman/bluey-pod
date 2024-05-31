import Image from 'next/image'

const options = { year: 'numeric', month: 'long', day: 'numeric' } as const

export default function Episode({ episode }) {
	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)
	return (
		<div className="flex flex-col justify-start w-full py-4 text-base text-left">
			<h2 className="mb-2 text-2xl font-bold text-center md:mb-4">{episode.title}</h2>
			<div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
				<Image
					src={episode.imgSrc}
					alt={episode.title}
					className="w-32 border-4 border-white md:w-48 h-fit aspect-square rounded-2xl"
					width={192}
					height={192}
				/>
				<div className="flex flex-col self-stretch overflow-hidden whitespace-break-spaces text-wrap text-ellipsis">
					<div className="mb-2 text-sm text-brandText">Posted: {pubDate}</div>
					<div className="[&_a]:text-brandOrange [&_a]:underline [&_a]:decoration-transparent [&_a:hover]:decoration-brandOrange [&_a]:px-0.5 [&_p]:pb-2 mb-1 [&_a]:pb-0.5 [&_a]:font-medium  [&_a]:break-words [&_a]:transition-all [&_a]:ease-in">
						<div dangerouslySetInnerHTML={{ __html: episode.summary }}></div>
					</div>
					<div className="flex items-end flex-1">
						<a
							className="inline-block text-base font-bold underline transition-all ease-in text-brandOrange decoration-transparent hover:decoration-brandOrange"
							target="_blank"
							href={episode.link}
						>
							Episode Link
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
