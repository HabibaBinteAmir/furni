/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ['"Poppins"', ],
      },
      maxWidth: {
        'bannerContainer': '1150px',
        'roomContainer': '1050px',
        
      },
      backgroundImage: {
        'bannerbg': "url('/src/assets/banner.jpg')",
        
      },
    },
  },
  plugins: [],
}

