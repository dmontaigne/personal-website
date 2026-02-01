/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-text)',
            '--tw-prose-bullets': 'var(--color-text-muted)',
            '--tw-prose-counters': 'var(--color-text-muted)',
            fontFamily: 'var(--font-serif)',
            lineHeight: '1.6',
            p: { lineHeight: '1.6' },
            li: { lineHeight: '1.6' },
            h1: { fontFamily: 'var(--font-sans)' },
            h2: { fontFamily: 'var(--font-sans)' },
            h3: { fontFamily: 'var(--font-sans)' },
            h4: { fontFamily: 'var(--font-sans)' },
            a: {
              color: 'var(--color-accent)',
              '&:hover': { color: 'var(--color-accent-hover)' },
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': 'var(--color-text)',
            '--tw-prose-headings': 'var(--color-text)',
            '--tw-prose-links': 'var(--color-accent)',
            '--tw-prose-bold': 'var(--color-text)',
            '--tw-prose-bullets': 'var(--color-text-muted)',
            '--tw-prose-counters': 'var(--color-text-muted)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
