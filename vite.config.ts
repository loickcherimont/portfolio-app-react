/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,   // listen all interfaces
    port: 5173,   // default container port
    strictPort: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setupTests.ts",
    coverage: {
      provider: 'istanbul',              // or 'istanbul'
      reporter: ['text', 'lcov'],  // 'text' for console, 'lcov' for browser
      all: true,                    // include all files, not only imported ones from testings
      include: ['src/**/*.{ts,tsx}'] // files to cover
    }
  },
  base: '/portfolio',
})
