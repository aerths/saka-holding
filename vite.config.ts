import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: '/saka-holding/',
  plugins: [vue(), svgLoader({ defaultImport: 'url' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variables" as *;
          @use "@/assets/styles/mixins" as *;
        `,
      },
    },
  },
})
