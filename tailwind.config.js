/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'sans-serif'],
  			mono: ['Share Tech Mono', 'JetBrains Mono', 'monospace'],
  			display: ['Share Tech Mono', 'monospace']
  		},
  		colors: {
  			background: '#0D0D0D',
  			foreground: '#00FF41',
  			primary: {
  				DEFAULT: '#00FF41',
  				foreground: '#0D0D0D'
  			},
  			terminal: {
  				green: '#00FF41',
  				dim: '#003B00',
  				bright: '#00FF66'
  			},
  			camo: {
  				dark: '#4B5320',
  				light: '#708238'
  			},
  			alert: {
  				red: '#FF3333'
  			},
  			border: '#00FF41',
  			input: '#003B00',
  			ring: '#00FF41',
  			muted: {
  				DEFAULT: '#003B00',
  				foreground: '#00FF41/60'
  			},
  			card: {
  				DEFAULT: '#0D0D0D',
  				foreground: '#00FF41'
  			}
  		},
  		keyframes: {
  			glitch: {
  				'0%, 100%': { transform: 'translate(0)' },
  				'33%': { transform: 'translate(-2px, 2px)' },
  				'66%': { transform: 'translate(2px, -2px)' }
  			},
  			'scanline-scroll': {
  				'0%': { transform: 'translateY(0)' },
  				'100%': { transform: 'translateY(100vh)' }
  			},
  			blink: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0' }
  			}
  		},
  		animation: {
  			glitch: 'glitch 0.2s ease-in-out infinite',
  			'scanline-scroll': 'scanline-scroll 8s linear infinite',
  			blink: 'blink 1s step-end infinite'
  		},
  		boxShadow: {
  			terminal: '0 0 10px rgba(0, 255, 65, 0.3)',
  			'terminal-lg': '0 0 20px rgba(0, 255, 65, 0.5)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}