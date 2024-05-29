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

	const conditionalClasses = classnames(isActive ? 'text-offText border-b-2 border-b-brand4' : 'text-offText')

	return (
		<Link {...rest} href={href} className={`font-bold whitespace-nowrap cursor-pointer hover:text-brand1 ${conditionalClasses}`}>
			{label}
		</Link>
	)
}

export default ActiveLink
