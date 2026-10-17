import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const invitationUrl = 'https://www.invitale.es/alejandro-y-esthefany-v2/'
const shareImageUrl = `${invitationUrl}social/alejandro-esthefany-monograma-v1.jpg`
const shareTitle = 'Alejandro & Esthefany · Nuestra boda'
const shareDescription = '26 de diciembre de 2036 · Nos elegimos. Nos casamos. Y queremos celebrarlo contigo.'

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
            { tag: 'link', attrs: { rel: 'canonical', href: invitationUrl }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'description', content: shareDescription }, injectTo: 'head' },
            ...[
              ['og:type', 'website'],
              ['og:locale', 'es_ES'],
              ['og:site_name', 'Invitale'],
              ['og:title', shareTitle],
              ['og:description', shareDescription],
              ['og:url', invitationUrl],
              ['og:image', shareImageUrl],
              ['og:image:secure_url', shareImageUrl],
              ['og:image:type', 'image/jpeg'],
              ['og:image:width', '1200'],
              ['og:image:height', '630'],
              ['og:image:alt', 'Monograma floral A & E de la boda de Alejandro y Esthefany'],
            ].map(([property, content]) => ({ tag: 'meta', attrs: { property, content }, injectTo: 'head' })),
            ...[
              ['twitter:card', 'summary_large_image'],
              ['twitter:title', shareTitle],
              ['twitter:description', shareDescription],
              ['twitter:image', shareImageUrl],
              ['twitter:image:alt', 'Monograma floral A & E de Alejandro y Esthefany'],
            ].map(([name, content]) => ({ tag: 'meta', attrs: { name, content }, injectTo: 'head' })),
            { tag: 'meta', attrs: { name: 'color-scheme', content: 'light' }, injectTo: 'head-prepend' },
            { tag: 'meta', attrs: { name: 'darkreader-lock' }, injectTo: 'head-prepend' },
            { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;1,400&display=swap' }, injectTo: 'head' },
          ],
        }
      },
    },
  }] : [])],
}))
