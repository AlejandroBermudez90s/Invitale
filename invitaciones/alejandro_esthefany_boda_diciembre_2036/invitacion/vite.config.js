import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'artistic' ? '/alejandro-y-esthefany-v2/' : '/alejandro-y-esthefany/',
  build: { outDir: mode === 'artistic' ? 'dist-v2' : 'dist' },
  plugins: [react(), ...(mode === 'artistic' ? [{
    name: 'artistic-color-fidelity',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return {
          html: html.replace(/<link\s+rel="icon"[^>]*\/?>/, '<link rel="icon" type="image/png" sizes="96x96" href="/src/v2/assets/favicon-monograma.png" />'),
          // La recoloración automática puede borrar las acuarelas de fondo.
          tags: [
            { tag: 'meta', attrs: { name: 'color-scheme', content: 'light' }, injectTo: 'head-prepend' },
            { tag: 'meta', attrs: { name: 'darkreader-lock' }, injectTo: 'head-prepend' },
            { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&display=swap' }, injectTo: 'head' },
          ],
        }
      },
    },
  }] : [])],
}))
