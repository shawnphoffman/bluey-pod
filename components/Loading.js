'use client'

export default function Loading({ label = 'no-label' }) {
	console.log('Loading', { label })
	return (
		<div className="bubbled" style={{ width: '100%' }}>
			Loading...
		</div>
	)
}
