const plugin = require('tailwindcss/plugin')
const tailwindColors = require('@shawnphoffman/pod-sites-common/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brandBackground: '#C2E3FE',
				brandText: '#5A5A87',
				brandBoxShadow: '#719fc2',
				brandOrange: '#e27a37',
			},
		},
	},
	plugins: [
		tailwindColors.default,
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.bubble-border': {
					borderRadius: theme('borderRadius.2xl'),
					borderWidth: theme('spacing.2'),
					borderColor: theme('colors.white'),
					boxShadow: `0.125rem 0.125rem 0rem 0.125rem ${theme('colors.brandBoxShadow')}`,
				},
				'.bubbled': {
					fontWeight: theme('fontWeight.medium'),
					background: `rgb(255 255 255 / 0.85)`,
					color: theme('colors.brandText'),
					padding: theme('spacing.4'),
					borderRadius: theme('borderRadius.2xl'),
					borderWidth: theme('spacing.2'),
					borderColor: theme('colors.white'),
					boxShadow: `0.125rem 0.125rem 0rem 0.125rem ${theme('colors.brandBoxShadow')}`,
				},
			})
		}),
	],
}
