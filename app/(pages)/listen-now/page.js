'use client'

export default function ListenNow() {
	return (
		<div className={'pageDescription bubbled'}>
			<iframe
				className={'iframe'}
				loading="lazy"
				title="Dinner with the Heelers Podcast Preview"
				src="https://embed.podcasts.apple.com/us/podcast/dinner-with-the-heelers/id1648081856?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=light"
				height="450px"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				allow="autoplay *; encrypted-media *; clipboard-write"
			></iframe>
		</div>
	)
}
