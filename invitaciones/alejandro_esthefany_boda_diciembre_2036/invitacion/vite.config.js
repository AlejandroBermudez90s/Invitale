import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'artistic' ? '/alejandro-y-esthefany-v2/' : '/alejandro-y-esthefany/',
  build: { outDir: mode === 'artistic' ? 'dist-v2' : 'dist' },
  plugins: [react(), ...(mode === 'artistic' ? [{
    name: 'artistic-color-fidelity',
    transformIndexHtml() {
      // La recoloración automática puede borrar las acuarelas de fondo.
      return [
        { tag: 'meta', attrs: { name: 'color-scheme', content: 'light' }, injectTo: 'head-prepend' },
        { tag: 'meta', attrs: { name: 'darkreader-lock' }, injectTo: 'head-prepend' },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&display=swap' }, injectTo: 'head' },
      ]
    },
  }] : [])],
}))
