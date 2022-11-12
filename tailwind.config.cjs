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
				},
				warble: {
					'0%': { "border-radius": '65% 35% 65% 35% / 35% 65% 35% 65%' },
					'100%': { "border-radius": '35% 65% 35% 65% / 65% 35% 65% 35%' },
				}
			},
			animation: {
				'shake-once': 'shake .8s linear 2',
				'warble': 'warble 1.2s ease-in-out infinite alternate',
			}
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true
	}
}
