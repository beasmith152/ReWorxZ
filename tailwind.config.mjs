/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif'], 
			rocker: ['Rocker', 'cursive'], racing: ['Racing Sans One', 'sans-serif'], hubot: ['Hubot Sans', 'sans-serif']},
			backgroundImage: {
        'hero1': "url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDVxejNmcmExbmNmNTVsYmJyMjB0dDFxYm9heDh5ZTUyemQ2M2c5MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o27WZxf6IRo1J0G6IP/giphy.gif')", 
		'hero2': "url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHgycGF0ZmJneDlqcWQ0N3FwbGNnMGZwYjFyanBzaTY2bmVobTJ3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RkHyUeaT10CiEuzZHF/giphy.gif')",
		'hero3': "url('https://img.freepik.com/premium-vector/abstract-seamless-luxury-dark-blue-gold-geometric-pattern-background_41814-365.jpg')",}
	},
	},
	plugins: [require("tw-elements/plugin.cjs"), require('@tailwindcss/typography'), require('daisyui')],
}