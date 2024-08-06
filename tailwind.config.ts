import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"j-peach": "#E7816B",
				"j-black": "#1D1C1E",
				"j-white": "#FFFFFF",
				"j-lightPeach": "#FFAD9B",
				"j-darkGrey": "#333136",
				"j-lightGrey": "#F1F3F5",
			},
		},
	},
	plugins: [],
};
export default config;
