import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#05070D',
          900: '#0A1020',
          800: '#111827',
        },
        blue: {
          deep: '#1E3A8A',
          primary: '#2563EB',
          light: '#60A5FA',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.2', fontWeight: '800' }],
        'display-lg': ['56px', { lineHeight: '1.2', fontWeight: '800' }],
        'heading-xl': ['48px', { lineHeight: '1.25', fontWeight: '700' }],
        'heading-lg': ['36px', { lineHeight: '1.3', fontWeight: '700' }],
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(37, 99, 235, 0.2)',
        'glow-md': '0 0 40px rgba(37, 99, 235, 0.3)',
        'glow-lg': '0 0 60px rgba(37, 99, 235, 0.4)',
        'elevation-sm': '0 4px 16px rgba(0, 0, 0, 0.3)',
        'elevation-md': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'elevation-lg': '0 16px 48px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(37, 99, 235, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
