import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}' // Adjust the paths based on your project structure
  ],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          custom: ['Degular', 'sans-serif']
        }
      }
    }
  },
  plugins: []
};

export default config;
