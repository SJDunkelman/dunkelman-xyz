/** @type {import('tailwindcss').Config} */
module.exports = {
	options: {
		safelist: ["bg-orange", "group-foo-hover:text-deep-blue"],
	},
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-grey': '#444444',
				'grey': '#222222',
				'cream': '#FBF5F3',
				'light-purple': '#CDCEE3',
				'purple': '#B4ADEA',
				'orange': '#EBA133',
				'light-teal': '#C3DFE0',
				'blue': '#D0F0FC',
				'deep-blue': '#004FFE',
				'green': '#7FC29B',
				'muted-green': '#B6C5C4',
			},
			spacing: {
				'128': '32rem',
				'144': '36rem',
		},
		namedGroups: ["foo", "bar", "baz"],
	},
	plugins: [
		require("tailwindcss-named-groups"),
	],
}
}
