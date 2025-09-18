import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        fg: 'var(--fg)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        accent2: 'var(--accent-2)'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.12)',
        softer: '0 8px 24px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji']
      }
    },
  },
  plugins: [],
} satisfies Config

