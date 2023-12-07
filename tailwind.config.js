/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#004A89",
          "secondary": "#28475C",
          "accent": "#28475C",
          "neutral": "#3d4451",
          "base-100": "#000C17",
        },
      },
    ],
  },
}
