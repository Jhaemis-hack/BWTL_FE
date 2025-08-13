import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        "richblack": '#0B0B0F',
        "softwhite": '#F4F4F5',
        "deepnavy": '#1B2A41',
        "softcrimson": '#C92A2A',
        "emerald": '#2F9E44',
        "slategray": '#495057',
        "lightgray": '#CFCFCF'
      },
    },
  },
} satisfies Config;
