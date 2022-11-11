/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				shake: {
					'0%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(9deg)' },
					'50%': { transform: 'rotate(0deg)' },
					'75%': { transform: 'rotate(-9deg)' },
					'100%': { transform: 'rotate(0deg)' },
				}
			},
			animation: {
				'shake-once': 'shake .8s linear 2'
			}
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true
	}
}
