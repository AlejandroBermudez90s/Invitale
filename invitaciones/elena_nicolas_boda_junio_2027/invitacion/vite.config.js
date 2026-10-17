import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'marine' ? '/elena-y-nicolas-v2/' : '/elena-y-nicolas/',
  build: { outDir: mode === 'marine' ? 'dist-marine' : 'dist' },
  plugins: [react(), {
    name: 'marine-invitation-head',
    transformIndexHtml(html) {
      if (mode !== 'marine') return html
      return html
        .replace(/<link rel="icon"[^>]+>/, '<link rel="icon" type="image/svg+xml" href="/elena-y-nicolas-v2/favicon-mar.svg">')
        .replace(/\s*<link rel="stylesheet" href="https:\/\/cdn.jsdelivr.net[^>]+>/, '')
        .replace(/\s*<script src="https:\/\/cdn.jsdelivr.net[^>]+><\/script>/, '')
        .replace('</head>', `<meta name="description" content="Elena y Nicolás. Una celebración junto al Mediterráneo, el 12 de junio de 2027. Invitación de muestra.">
<meta name="robots" content="noindex, follow">
<meta name="theme-color" content="#fffaf1">
<meta name="color-scheme" content="only light">
<meta name="darkreader-lock">
<meta property="og:title" content="Elena &amp; Nicolás · Nos vemos junto al mar">
<meta property="og:description" content="12 de junio de 2027 · Costa Brava · Invitación de muestra">
<meta property="og:type" content="website">
<meta property="og:url" content="https://invitale.es/elena-y-nicolas-v2/">
<meta property="og:image" content="https://invitale.es/elena-y-nicolas-v2/social/elena-nicolas-mar-v1.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
</head>`)
    },
  }],
}))
