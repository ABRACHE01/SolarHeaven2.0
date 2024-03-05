/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
}
