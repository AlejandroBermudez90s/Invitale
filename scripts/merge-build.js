// Fusiona el build del hub (out/) y el build de cada evento (dist/) en publish/,
// para servir todo desde un único despliegue estático en Cloudflare.
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
  {
    carpeta: 'invitaciones/alejandro_esthefany_boda_diciembre_2036/invitacion',
    slugUrl: 'alejandro-y-esthefany',
  },
  {
    carpeta: 'invitaciones/elena_nicolas_boda_junio_2027/invitacion',
    slugUrl: 'elena-y-nicolas',
  },
  {
    carpeta: 'invitaciones/jose_comunion_mayo_2027/invitacion',
    slugUrl: 'jose-comunion',
  },
]

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    throw new Error(`No existe el directorio de origen: ${src}`)
  }
  fs.cpSync(src, dest, { recursive: true })
}

function main() {
  // Un despliegue incompleto no debe sustituir al sitio completo.
  const entradas = [
    path.join(HUB_OUT_DIR, 'index.html'),
    path.join(HUB_OUT_DIR, '404.html'),
    ...EVENTOS.map(({ carpeta, buildDir = 'dist' }) => path.join(ROOT, carpeta, buildDir, 'index.html')),
  ]
  for (const entrada of entradas) {
    if (!fs.existsSync(entrada) || !fs.statSync(entrada).isFile()) {
      throw new Error(`Build incompleto: falta ${path.relative(ROOT, entrada)}. Ejecuta npm run build.`)
    }
  }

  fs.rmSync(PUBLISH_DIR, { recursive: true, force: true })
  fs.mkdirSync(PUBLISH_DIR, { recursive: true })

  console.log(`Copiando hub (${HUB_OUT_DIR}) -> ${PUBLISH_DIR}`)
  copyDir(HUB_OUT_DIR, PUBLISH_DIR)

  for (const { carpeta, slugUrl, buildDir = 'dist' } of EVENTOS) {
    const distDir = path.join(ROOT, carpeta, buildDir)
    const destDir = path.join(PUBLISH_DIR, slugUrl)
    console.log(`Copiando evento ${slugUrl} (${distDir}) -> ${destDir}`)
    copyDir(distDir, destDir)
  }

  console.log('Merge de build completado en publish/')
}

main()
