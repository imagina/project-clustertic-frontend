const animate = require('tailwindcss-animate')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: 'tw-',

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1148px',
          xl: '1530px',
        },
      },
      colors: {
        border: 'hsla(var(--border),var(--tw-bg-opacity))',
        input: 'hsla(var(--input),var(--tw-bg-opacity))',
        link: 'hsla(var(--link),var(--tw-bg-opacity))',
        ring: 'hsla(var(--ring),var(--tw-bg-opacity))',
        background: 'hsla(var(--background),var(--tw-bg-opacity))',
        foreground: 'hsla(var(--foreground),var(--tw-bg-opacity))',
        primary: {
          DEFAULT: 'hsla(var(--primary),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--primary-foreground),var(--tw-bg-opacity))',
          alt: 'hsla(var(--primary-alt),var(--tw-bg-opacity))',
          dark: 'hsla(var(--primary-dark),var(--tw-bg-opacity))',
        },
        secondary: {
          DEFAULT: 'hsla(var(--secondary),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--secondary-foreground),var(--tw-bg-opacity))',
        },
        destructive: {
          DEFAULT: 'hsla(var(--destructive),var(--tw-bg-opacity))',
          foreground:
            'hsla(var(--destructive-foreground),var(--tw-bg-opacity))',
        },
        muted: {
          DEFAULT: 'hsla(var(--muted),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--muted-foreground),var(--tw-bg-opacity))',
          custom: 'hsla(var(--custom-muted),0.55)',
          light: 'hsla(var(--custom-muted),0.17)',
        },
        accent: {
          DEFAULT: 'hsla(var(--accent),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--accent-foreground),var(--tw-bg-opacity))',
        },
        popover: {
          DEFAULT: 'hsla(var(--popover),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--popover-foreground),var(--tw-bg-opacity))',
        },
        card: {
          DEFAULT: 'hsla(var(--card),var(--tw-bg-opacity))',
          foreground: 'hsla(var(--card-foreground),var(--tw-bg-opacity))',
        },
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' },
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down .5s ease-out',
        'accordion-up': 'accordion-up .5s ease-out',
        'collapsible-down': 'collapsible-down .5s ease-in-out',
        'collapsible-up': 'collapsible-up .5s ease-in-out',
        'fade-in': 'fade-in .5s ease-in-out',
        'slide-down': 'slide-down .5s ease-in-out',
      },
    },
  },
  plugins: [animate],
}
