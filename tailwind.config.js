/** @type {import('tailwindcss').Config} */
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

const config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		'./node_modules/@mui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			animation: {
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite"
			},
			keyframes: {
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)'
					}
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				}
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				navbg: "#0d2512",
				footergDarkBg: "#19381f",
				// ktheme: {
				// 	100: "#fcf3db",
				// 	200: "#f8e6b8",
				// 	300: "#f5da94",
				// 	400: "#f1cd71",
				// 	500: "#eec14d",
				// 	600: "#be9a3e",
				// 	700: "#8f742e",
				// 	800: "#5f4d1f",
				// 	900: "#30270f"
				// },
				ktheme: {
					100: "#fff8cc",
					200: "#fff299",
					300: "#ffeb66",
					400: "#ffe533",
					500: "#ffde00",
					600: "#ccb200",
					700: "#998500",
					800: "#665900",
					900: "#332c00"
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

module.exports = config;
