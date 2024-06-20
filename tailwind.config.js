/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // Disable specific utilities
    preflight: false, // Disable Tailwind's base styles
    }, // Add a prefix to all Tailwind classes
  prefix: 'tw-',
};