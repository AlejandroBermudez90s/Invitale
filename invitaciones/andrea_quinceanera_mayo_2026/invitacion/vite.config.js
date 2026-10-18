import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { readFileSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'artistic' ? '/andrea-15-v2/' : '/andrea-15/',
  build: { outDir: mode === 'artistic' ? 'dist-v2' : 'dist' },
  plugins: [react(), ...(mode === 'artistic' ? [{
    name: 'andrea-artistic-document',
    transformIndexHtml: { order: 'pre', handler: () => readFileSync(new URL('./artistic.html', import.meta.url), 'utf8') },
  }] : [])],
}))
