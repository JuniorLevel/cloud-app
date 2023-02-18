/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			xl: '1600px',
			md: '1024px',
		},
		extend: {
			colors: {
				'title-color': '#3B668D',
				'text-color': '#2B4964',
			},
			boxShadow: {
				'3xl': '0px 6px 8px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
}
