import type { Config } from 'tailwindcss'
import { lgColorsConfig } from './lg-colors-config'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared-components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'lg-tar': lgColorsConfig.colors['lg-tar'],
      },
      animation: {
        loader: 'loader 0.6s infinite alternate',
        disappear: 'disappear 0.6s ease-in',
        longDisappear: 'disappear 0.1s 0.6s ease-in',
      },
      keyframes: {
        loader: {
          to: {
            opacity: '0.1',
            transform: 'translate3d(0, -1rem, 0)',
          },
        },
        disappear: {
          '0%, 100%': {
            visibility: 'hidden',
          },
          '30%': { visibility: 'visible' },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities(
        {
          'animate-delay': (value) => ({
            animationDelay: value,
          }),
        },
        {
          values: {
            '200': '200ms',
            '400': '400ms',
          },
        }
      )
    }),
  ],
} satisfies Config
