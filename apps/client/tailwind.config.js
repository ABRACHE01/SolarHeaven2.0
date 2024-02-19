/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-mantine-color-scheme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  corePlugins: { preflight: false },
  theme: {
    extend: {},
  },
  plugins: [],
}
