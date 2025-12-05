import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/joelregiabraham.github.io/', // Change to '/repo-name/' for GitHub Pages
})
