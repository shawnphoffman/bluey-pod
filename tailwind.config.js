const plugin = require('tailwindcss/plugin')

const podSitesColors = {
	amazonmusic: '#0077c1',
	applepodcasts: '#872ec4',
	bluesky: '#0560ff',
	castbox: '#db3c0e',
	discord: '#5865F2',
	email: '#52565e',
	etsy: '#f56400',
	facebook: '#0866ff',
	goodpods: '#fcdb00',
	googlepodcasts: '#206ff2',
	iheart: '#c6002b',
	instagram: '#c13584',
	overcast: '#be5a01',
	patreon: '#d93b26',
	pocketcasts: '#ea150d',
	podbean: '#5f7e1b',
	radiopublic: '#ce262f',
	rss: '#ce4a0c',
	spotify: '#16883e',
	teepublic: '#374ecd',
	threads: '#222',
	tiktok: '#eb004a',
	twitch: '#9146ff',
	twitter: '#0d7ac4',
	youtube: '#ee0000',
	zencastr: '#1474e0',
}


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@shawnphoffman/pod-sites-shared/dist/**/*.{js,mjs,cjs}',
	],
	theme: {
		extend: {
			colors: {
				...podSitesColors,
				brandBackground: '#C2E3FE',
				brandText: '#5A5A87',
				brandBoxShadow: '#719fc2',
				brandOrange: '#e27a37',
			},
		},
	},
	plugins: [
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
