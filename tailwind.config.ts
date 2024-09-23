import { Config } from "tailwindcss";

export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,html}",
		"./public/**/*.{js,ts,html}",
	],
	theme: {
		extend: {
			colors: {
				donate: "#B4F461",
				"donate-alter": "#7ec126",
				"donate-bg": "#F9F7F3",
				"donate-primary": "#111111",
				"donate-secondary": "#111111B3",
				"donate-border": "#1111111A",
			},
		},
	},
	plugins: [],
} as Config;
