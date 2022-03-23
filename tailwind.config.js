module.exports = {
  content: [
    './src//pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    domains: ['fakestoreapi.com'],
  },
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          nav: 'var(--color-nav-bg)',
        },
      },
    },
  },
  plugins: [],
};
