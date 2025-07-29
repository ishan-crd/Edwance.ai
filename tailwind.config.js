/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF7E36',
        orangeLight: '#FF8E57',
        orangeDark: '#E6692B',
        neutral: {
          white: '#FFFFFF',
          grayLight: '#F8F9FA',
          grayMedium: '#E5E7EB',
          grayDark: '#6B7280',
          black: '#1F2937',
        },
      },
      fontFamily: {
        plak: [
          'Neue-Plak-Extended-Bold',
          'Arial',
          'Helvetica',
          'sans-serif',
        ],
        poppins: [
          'Poppins',
          'sans-serif',
        ],
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        'xl': '12px',
      },
      boxShadow: {
        orange: '0 8px 32px rgba(255, 123, 58, 0.12)',
        orangeHover: '0 12px 32px rgba(255, 123, 58, 0.4)',
      },
    },
  },
  plugins: [],
}; 