'use client'

import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	label: string
	href: string
	fuzzy?: boolean
}

const ActiveLink = ({ label, href, fuzzy, ...rest }: Props) => {
	const currentRoute = usePathname()
	const isActive = fuzzy ? currentRoute.toLowerCase().startsWith(href) : currentRoute === href

	const conditionalClasses = classnames(isActive ? 'text-brandText border-b-2 border-b-brandText' : 'text-brandText')

	return (
		<Link
			{...rest}
			href={href}
			className={`font-bold whitespace-nowrap cursor-pointer transition-colors ease-in hover:text-brandOrange ${conditionalClasses}`}
		>
			{label}
		</Link>
	)
}

export default ActiveLink
