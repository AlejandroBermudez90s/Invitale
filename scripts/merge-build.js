// Fusiona el build del hub (out/) y el build de cada evento (dist/) en publish/,
// para que Netlify sirva todo como un único site.
//
// Para añadir un evento nuevo, añade una línea a EVENTOS.
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const PUBLISH_DIR = path.join(ROOT, 'publish')
const HUB_OUT_DIR = path.join(ROOT, 'out')

const EVENTOS = [
  {
    carpeta: 'invitaciones/andrea_quinceanera_mayo_2026/invitacion',
    slugUrl: 'andrea-15',
  },
]

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`No existe el directorio de origen: ${src}`)
  }
  fs.cpSync(src, dest, { recursive: true })
}

function main() {
  fs.rmSync(PUBLISH_DIR, { recursive: true, force: true })
  fs.mkdirSync(PUBLISH_DIR, { recursive: true })

  console.log(`Copiando hub (${HUB_OUT_DIR}) -> ${PUBLISH_DIR}`)
  copyDir(HUB_OUT_DIR, PUBLISH_DIR)

  for (const { carpeta, slugUrl } of EVENTOS) {
    const distDir = path.join(ROOT, carpeta, 'dist')
    const destDir = path.join(PUBLISH_DIR, slugUrl)
    console.log(`Copiando evento ${slugUrl} (${distDir}) -> ${destDir}`)
    copyDir(distDir, destDir)
  }

  console.log('Merge de build completado en publish/')
}

main()
