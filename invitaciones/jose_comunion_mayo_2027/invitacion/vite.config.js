import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'artistic' ? '/jose-comunion-v2/' : '/jose-comunion/',
  build: { outDir: mode === 'artistic' ? 'dist-v2' : 'dist' },
  plugins: [react()],
}))
