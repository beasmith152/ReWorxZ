/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif']},
			backgroundImage: {
        'hero1': "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVxejNmcmExbmNmNTVsYmJyMjB0dDFxYm9heDh5ZTUyemQ2M2c5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o27WZxf6IRo1J0G6IP/giphy.gif')",
		'hero2': "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczAzY3R4MjgyYTh5OTRlbm9reGpjb3B5dGdxOHdheWpscTE2OHMydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/izelLjv9Hha4k2qiEg/giphy.gif')",
		},
	},
	plugins: [require("tw-elements/plugin.cjs"), require('@tailwindcss/typography'), require('daisyui')],
}
}