/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EEEEEE',
        secondary: '#FF4825',
        accent: '#EC44F7',
        dark: {
          100: '#191D23',
          200: '#1E2229',
          300: '#222831',
        },
        pink: {
          100: '#C338CC',
          200: '#EC44F7',
        }
      },
      fontFamily: {
        'audiowide': ['Audiowide', 'cursive'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'navbar-pattern': "url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'hero-pattern': "url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}