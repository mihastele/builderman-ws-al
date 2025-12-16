import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#f9d7ad',
          300: '#f5ba78',
          400: '#f09441',
          500: '#ec761c',
          600: '#dd5c12',
          700: '#b74411',
          800: '#923716',
          900: '#762f15',
          950: '#401509',
        },
        brick: {
          50: '#fdf5f3',
          100: '#fce8e4',
          200: '#fbd5cd',
          300: '#f6b7aa',
          400: '#ef8d79',
          500: '#e4654e',
          600: '#d04a31',
          700: '#ae3b25',
          800: '#903422',
          900: '#783022',
          950: '#41150d',
        },
        stone: {
          50: '#f7f7f6',
          100: '#e4e4e2',
          200: '#c9c9c5',
          300: '#a7a7a0',
          400: '#85857c',
          500: '#6a6a62',
          600: '#54544d',
          700: '#454540',
          800: '#393936',
          900: '#31312f',
          950: '#1a1a18',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
