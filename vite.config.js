import { defineConfig } from 'vite'
import { resolve } from "node:path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src/'),
    }
  },
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react';`,
  },
})
