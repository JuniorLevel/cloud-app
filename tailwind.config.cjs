/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1600px',
			hd: '1200px',
			laptop: '1024px',
			md: '900px',
			tablet: '640px',
			phone: '320px'
		},
		extend: {
			colors: {
				'title-color': '#3B668D',
				'text-color': '#2B4964',
			},
			boxShadow: {
				'3xl': '0px 6px 8px rgba(0, 0, 0, 0.2)',
			},
			keyframes: {
				menuAnim: {
					'0%': { transform: 'translateX(150px)'},
					'100%': { transform: 'translateX(-150px)'},
				}
			}
		},
	},
	plugins: [],
}
