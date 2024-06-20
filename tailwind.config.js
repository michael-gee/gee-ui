/** @type {import('tailwindcss').Config} */

import tailwindPreset from './src/tailwind-preset.cjs';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: ['selector'],
  presets: [tailwindPreset]
};
