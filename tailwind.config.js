/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				source: ["Source Serif 4", "serif"],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						blockquote: {
							// color: theme('colors.gray.300'), // Light text color
							backgroundColor: theme('colors.slate.200'), // Dark background color
							borderLeftColor: theme('colors.blue.500'), // Accent color for left border
							paddingLeft: theme('spacing.4'),
							paddingRight: theme('spacing.4'),
							paddingTop: theme('spacing.2'),
							paddingBottom: theme('spacing.2'),
							borderRadius: theme('borderRadius.md'),
						},
						'blockquote p': {
							fontWeight: '300', // Ensure paragraphs inside blockquote are light
						},
						'blockquote p:first-of-type::before': {
							content: 'none', // Remove the default quotation mark
						},
						'blockquote p:last-of-type::after': {
							content: 'none', // Remove the default quotation mark
						},
						'code': {
							whiteSpace: 'pre-wrap',
							wordBreak: 'break-word',
							hyphens: 'auto',
							overflowWrap: 'break-word',
						},
						'pre code': {
							display: 'inline-block',
							maxWidth: '100%',
						},
					},
				},
			}),
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography')
	],
}