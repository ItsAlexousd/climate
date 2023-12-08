/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0 30em 1em',
        '6xl': '0 0 100em 4em',
      },
      borderWidth: {
        DEFAULT: '1px',
        '35': '35px',
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        ocean: {
          "primary": "#0082f2",
          "secondary": "#003562",
          "accent": "#28475C",
          "neutral": "#3d4451",
          "base-100": "#01182B",
        },
        deforestation: {
          "primary": "#61915E",
          "secondary": "#255522",
          "accent": "#28475C",
          "neutral": "#3d4451",
          "base-100": "#071C05",
        },
        globalWarming: {
          "primary": "#ed6034",
          "secondary": "#802525",
          "accent": "#28475C",
          "neutral": "#3d4451",
          "base-100": "#621919",
        },
      },
    ],
  },
}
