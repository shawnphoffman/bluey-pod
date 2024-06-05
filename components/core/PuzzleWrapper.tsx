'use client'

import { useRef } from 'react'
import React from 'react'
import { useReactToPrint } from 'react-to-print'

export default function PuzzleWrapper({ children }) {
	const componentRef = useRef([null])
	const handlePrint = useReactToPrint({
		content: () => componentRef.current[0],
		documentTitle: 'Word Search',
		bodyClass: 'p-16 flex flex-col items-center justify-center m-auto',
	})

	return (
		<>
			<div className="flex flex-row items-center self-center gap-4">
				<div className="text-2xl font-bold">Word Search</div>
				<button className="self-center px-4 py-2 m-0 leading-none text-white bg-brandText rounded-3xl" onClick={handlePrint}>
					PRINT
				</button>
			</div>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child, {
					ref: ref => (componentRef.current[index] = ref),
				})
			)}
		</>
	)
}
