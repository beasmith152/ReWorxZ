/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif'], 
			rocker: ['Rocker', 'cursive'], racing: ['Racing Sans One', 'sans-serif'], hubot: ['Hubot Sans', 'sans-serif']},
			backgroundImage: {
				'hero1': "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3JtdGVjdnRtcWgwcGQzNDZkN3ZvN2t0ZnNxaW91Z3FxazQ3NHRvcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ULXAGx1G1LhNJpMKkU/giphy.gif')", 
			'hero2': "url('/images/bg.png')",
		'hero3': "url('https://img.freepik.com/free-vector/vintage-flash-tattoos-monochrome-seamless-pattern_225004-1534.jpg?semt=ais_hybrid&w=740&q=80')",}
	},
	},
	plugins: [require("tw-elements/plugin.cjs"), require('@tailwindcss/typography'), require('daisyui')],
}