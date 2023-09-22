import type { Config } from "tailwindcss";
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-color": "var(--primary-color)",
				"secondary-color": "var(--secondary-color)",
				"tertiary-color": "var(--tertiary-color)",
				"quaternary-color": "var(--quaternary-color)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
export default config;
