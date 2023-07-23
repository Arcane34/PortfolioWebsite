// vite.config.js
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
  }

  if (command !== 'serve') {
    config.base = '/PortfolioWebsite/'
  }

  return config
})