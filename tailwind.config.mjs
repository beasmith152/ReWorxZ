/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif']},
			backgroundImage: {
        'hero': "url('https://youtu.be/6NImgmZKLfo')"}
		},
	},
	plugins: [require("tw-elements/plugin.cjs"), require('@tailwindcss/typography'), require('daisyui')],
}
