// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
  ],
  theme: {
    colors: {
      'soft-black': '#0a0a0a',
      'soft-white': '#e4e4e7',
      'brand-lime': '#D7FF00',
    },
    fontFamily: {
      'satoshi': 'Satoshi, sans-serif',
      'jakarta': '"Plus Jakarta Sans", sans-serif',
    },
  },
})