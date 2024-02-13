/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,html,js,ts}'],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'sans-serif'],
      'serif': ['"Merriweather"', 'serif'],
      'mono': ['"Roboto Mono"', 'monospace'],
      'ibm': ['"IBM Plex Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

