/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A4D47',
          light: '#2D6A5F',
          lighter: '#D4E4E0',
          lightest: '#EDF4F2',
          dark: '#0F3530',
        },
        accent: {
          DEFAULT: '#C8825A',
          light: '#D89B72',
          dark: '#A66A45',
          lightest: '#F5E8DD',
        },
        cream: '#FBFAF7',
        ink: '#1F2421',
        muted: '#5C6560',
        line: '#E8E5DF',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
