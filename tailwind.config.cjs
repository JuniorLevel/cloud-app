/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			desktop: '1600px',
			hd: '1220px',
			laptop: '1024px',
			md: '980px',
			tablet: '640px',
			phone: '320px'
		},
		extend: {
			colors: {
				'title-color': '#3B668D',
				'text-color': '#2B4964',
				'grey-color': '#79788F',
				'green-color': '#40BF3D',
				'purple-color': '#8572FF',
				'card-text-color': '#567796'
			},
			boxShadow: {
				'3xl': '0px 6px 8px rgba(0, 0, 0, 0.2)',
			},
			keyframes: {
				menuAnim: {
					'0%': { transform: 'translateX(150px)'},
					'100%': { transform: 'translateX(-150px)'},
				}
			},
			backgroundImage: {
				'advBg': "url('../src/images/home-page/adv-bg.png')",
				'svgBg': "url('../src/images/home-page/svg/svg-bg.svg')",
				'mobBg': "url('../src/images/home-page/mobile-bg.png')",
				'cardMainBg': "url('../src/images/home-page/card/bg-main-card.svg')",
				'cardBg': "url('../src/images/home-page/card/card-bg.svg')",
				'pricingBg': "url('../src/images/home-page/bg-pricing.svg')"
			},
			// dropShadow: {
			// 	'cardShadow': '0px 13px 27px rgba(0, 0, 0, 0.1)'
			// }
		},
	},
	plugins: [],
}
