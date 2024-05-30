'use client'

export default function ListenNow() {
	return (
		<div className="w-full max-w-3xl p-0 bubbled">
			<iframe
				className="w-full mx-auto border-none"
				src="https://open.spotify.com/embed/show/01RC12mzSlrKmYYe2pjxgM"
				width="100%"
				height="352"
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				loading="lazy"
			></iframe>
		</div>
	)
}
