/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{chonburi: ['Chonburi', 'sans-serif']},
			backgroundImage: {
        'hero': "url('https://cdn.sanity.io/images/cctd4ker/production/f14b1cd7cd359556864db06cabd95dd8ad8c7bfa-3840x2160.jpg?w=3840&q=75&fit=clip&auto=format')"}
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
