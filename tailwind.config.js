/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['selector', '[data-mode="dark"]'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
			},
			gridTemplateColums: {
				'70/30': '70%, 28%',
			},
		},
	},
	plugins: [],
};
