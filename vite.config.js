import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [],
  server: {
    port: 8000
  },
  resolve: {
    alias: {
    }
  },
  base: process.env.NODE_ENV === 'production'
    ? '/infinite-horizontal-scroll/'
    : '/'
})
