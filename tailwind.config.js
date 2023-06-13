/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		borderRadius: {
			none: "0",
			sm: "0.125rem",
			md: "0.375rem",
			lg: "0.5rem",
			xl: "0.625rem",
			xxl: "0.75rem",
			full: "9999px",
		},
		extend: {
			colors: {
				accent: "#B59640",
				"accent-hover": "#977D35",
				// accent: "#3b82f6",
				//"accent-hover": "#1d4ed8",
			},
		},
	},
	plugins: [],
};
