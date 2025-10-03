/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif']},
			backgroundImage: {
        'hero': "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVxejNmcmExbmNmNTVsYmJyMjB0dDFxYm9heDh5ZTUyemQ2M2c5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o27WZxf6IRo1J0G6IP/giphy.gif')"}, backgroundImage: {
        'hero2': "url('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjQ4OTVvYWUxbnU4bG5pZTE5MDdud2g0YmJ0dThkYWQ4a3E5cHBobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3dVHbijgUdfT4RdevV/giphy.gif')"}
		},
	},
	plugins: [require("tw-elements/plugin.cjs"), require('@tailwindcss/typography'), require('daisyui')],
}
