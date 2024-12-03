/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from "path";

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  root: 'src',
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: path.join(__dirname, 'src/index.html'),
    },
  },
})
