const plugin = require('tailwindcss/plugin')

// const bluey1 = '#edcc6f';
// const bluey2 = '#d2ebff';
// const bluey3 = '#88cafc';
const bluey4 = '#404066'
// const bluey5 = '#181925';
const bluey6 = '#1c5eaf'
const bluey7 = '#72bfed'
// const bluey8 = '#e4dcbd';
const bluey9 = '#f1b873'
const bluey10 = '#e27a37'

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
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: 0 },
					'100%': { transform: 1 },
				},
			},
			animation: {
				fadeInUp: '0.5s fadeInUp',
			},
			backgroundColor: {
				applepodcasts: '#872ec4',
				spotify: '#16883e',
				twitter: '#0d7ac4',
				teepublic: '#374ecd',
				overcast: '#be5a01',
				youtube: '#ee0000',
				googlepodcasts: '#206ff2',
				goodpods: '#fcdb00',
				amazonmusic: '#0077c1',
				iheart: '#c6002b',
				pocketcasts: '#ea150d',
				castbox: '#db3c0e',
				zencastr: '#1474e0',
				rss: '#ce4a0c',
				facebook: '#0866ff',
				bluesky: '#0560ff',
				instagram: '#c13584',
				etsy: '#f56400',
				radiopublic: '#ce262f',
				podbean: '#5f7e1b',
				googlepodcasts: '#206ff2',
				email: '#52565e',
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents, theme }) {
			addComponents({
				'.link': {
					backgroundImage: `linear-gradient(to right, ${theme('colors.brand2')}, ${theme('colors.brand2')} 50%, ${theme(
						'colors.brand1'
					)} 50%)`,
					backgroundSize: '200% 100%',
					backgroundPosition: '-100%',
					display: 'inline-block',
					position: 'relative',
					transition: 'all 0.2s ease-in-out',
					backgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					'&:hover': {
						backgroundPosition: '0',
					},
					'&::before': {
						content: '""',
						display: 'block',
						position: 'absolute',
						bottom: '0px',
						width: '0',
						height: '3px',
						transition: 'all 0.2s ease-in-out',
						left: '0',
						background: theme('colors.brand2'),
					},
					'&:hover::before': {
						width: '100%',
					},
					'&.text-white': {
						backgroundImage: `linear-gradient(to right, ${theme('colors.brand2')}, ${theme('colors.brand2')} 50%, ${theme(
							'colors.white'
						)} 50%)`,
					},
				},
			})
		}),
	],
}

// @layer components {
// 	.link {
// 		@apply bg-[linear-gradient(to_right,#fede00,#fede00_50%,#60a5fa_50%)] bg-[size:200%_100%] bg-[position:-100%] inline-block relative transition-all duration-[0.2s] ease-[ease-in-out] bg-clip-text;
// 		-webkit-text-fill-color: transparent;
// 		/* Hover */
// 		@apply hover:bg-[0];
// 		/* Before */
// 		@apply before:bg-brand2 before:content-[''] before:block before:absolute before:bottom-[-3px] before:w-0 before:h-[3px] before:transition-all before:duration-[0.2s] before:ease-[ease-in-out] before:left-0;
// 		/* Hover Before */
// 		@apply hover:before:w-full;
// 	}
// }
