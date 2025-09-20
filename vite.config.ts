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
    port: 3000,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setupTests.ts",
    coverage: {
      provider: 'istanbul',              // ou 'istanbul'
      reporter: ['text', 'lcov'],  // 'text' pour console, 'lcov' pour navigateur
      all: true,                    // inclut tous les fichiers, pas seulement ceux importés dans les tests
      include: ['src/**/*.{ts,tsx}'] // fichiers à couvrir
    }
  },
  base: '/portfolio-app-react/',

})
