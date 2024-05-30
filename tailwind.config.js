const plugin = require('tailwindcss/plugin')
const tailwindColors = require('@shawnphoffman/pod-sites-common/tailwind')

// const bluey1 = '#edcc6f';
// const bluey2 = '#d2ebff';
// const bluey3 = '#88cafc';
const bluey4 = '#404066' // darkBlue
// const bluey5 = '#181925';
const bluey6 = '#1c5eaf' // blue
const bluey7 = '#72bfed' // lightBlue
// const bluey8 = '#e4dcbd';
const bluey9 = '#f1b873' // lightOrange
const bluey10 = '#e27a37' // orange

const offText = 'rgb(90, 90, 135)' // text
const offTextBg = 'rgb(248, 248, 255)' // textBg
const offBg = '#c2e3fe' // bg
const offWhite = 'white' // white
const offBoxShadowColor = 'rgb(224, 250, 251)'

const offBorderRadius = '1rem'
const offBorder = '0.5rem solid white'
const offBoxShadow = '0.125rem 0.125rem 0rem 0.125rem #719fc2'

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
				brand1: bluey10,
				brand2: bluey9,
				brand3: bluey4,
				brand4: bluey7,
				brand5: bluey6,
				offText,
				offTextBg,
				offBg,
				offWhite,
				offBoxShadowColor,
			},
			borderRadius: {
				brandRadius: offBorderRadius,
			},
			border: {
				brandBorder: offBorder,
			},
			boxShadow: {
				brandShadow: offBoxShadow,
			},
		},
	},
	plugins: [
		tailwindColors.default,
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.bubble-border': {
					borderRadius: theme('borderRadius.brandRadius'),
					border: theme('border.brandBorder'),
					boxShadow: theme('boxShadow.brandShadow'),
				},
				'.bubbled': {
					fontWeight: theme('fontWeight.medium'),
					background: theme('colors.offTextBg'),
					color: theme('colors.offText'),
					padding: theme('spacing.4'),
					borderRadius: theme('borderRadius.brandRadius'),
					border: theme('border.brandBorder'),
					boxShadow: theme('boxShadow.brandShadow'),
				},
			})
		}),
	],
}
