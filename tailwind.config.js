/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        os: {
          red:        "var(--os-red)",
          "red-dark": "var(--os-red-dark)",
          navy:       "var(--os-navy)",
          panel:      "var(--os-panel)",
          surface:    "var(--os-surface)",
          border:     "var(--os-border)",
          muted:      "var(--os-muted)",
          text:       "var(--os-text)",
          "text-dim": "var(--os-text-dim)",
          blue:       "var(--os-blue)",
          green:      "var(--os-green)",
          yellow:     "var(--os-yellow)",
        },
      },
      fontFamily: {
        sans: ['Red Hat Display', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Red Hat Mono', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
