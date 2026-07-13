/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          border: '#30363d',
          input: '#21262d',
          hover: '#1c2128',
        },
        accent: {
          green: '#3fb950',
          blue: '#58a6ff',
          purple: '#bc8cff',
          orange: '#d29922',
        },
      },
    },
  },
  plugins: [],
}
