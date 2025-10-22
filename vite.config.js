import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use '/' for development, '/portfolio-software/' for production to match repository name
  base: mode === 'production' ? '/portfolio-software/' : '/',
  // Optimize asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  build: {
    // Ensure images are copied to dist
    assetsInlineLimit: 0, // Don't inline images, always copy them
  }
}))
