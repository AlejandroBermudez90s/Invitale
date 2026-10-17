# Elena y Nicolás · Carta del Mediterráneo

Propuesta comparativa del 18 de octubre de 2026. La invitación anterior y la galería se conservan.

## Dirección de arte

Papelería marfil con azul océano, hortensia, verde mar y arena de la invitación original. Composición costera propia: acuarela de cala y velero, conchas con cordón fino, sello azul con relieve de concha, monograma E/N y oleaje dibujado. Las plantas que aparecen forman parte del paisaje; no hay decoración floral.

Se trasladan las ideas de apertura, lectura progresiva, ilustración, música opcional, ritmo editorial y RSVP desplegable de Alejandro y Esthefany. Se conservan fecha, lugares, historia y vestimenta de Elena y Nicolás. No se añade cuenta bancaria a una invitación que no tenía regalos.

## Recursos y procedencia

Generados con la herramienta integrada image_gen, inspeccionados y guardados como WebP optimizado en `assets/`. Las tres escenas son interpretaciones ilustradas; Els Ginesters es una finca ficticia. El PNG con alpha de las conchas se conserva con transparencia en WebP. Los originales generados permanecen fuera del repositorio, en la carpeta de imágenes de Codex.

`public/social/elena-nicolas-mar-v1.jpg` es una versión de 1200 × 630 de la cala para compartir. `public/favicon-mar.svg` es un monograma vectorial editable.

El paisaje sonoro es una secuencia propia de arpegios sinusoidales en Web Audio, con botón de pausa y sin reproducción automática. No descarga pistas externas ni reutiliza el audio aportado para otro evento.

## Prompts finales completos

### assets/costa-brava.webp

Use case: illustration-story. Asset type: wide watercolor illustration for an elegant Mediterranean wedding invitation, 1536x1024 landscape. Primary request: original fine art watercolor of the Costa Brava, Catalonia, a secluded turquoise cove with warm pale granite rocks and distant headland, tiny ivory sailboat at sea, calm June afternoon. Style: exquisite hand painted watercolor and very fine graphite drawing on warm ivory cotton paper #fffaf1, soft watery edges fading fully into blank ivory paper on all four sides; atmospheric restrained editorial wedding stationery, sophisticated and luminous, not cartoon, not photograph, no digital gradients. Color palette ocean blue #1f5c78, sea glass #7c9b8e, pale blue #dbe9ee, subtle periwinkle #8b93c9, sand gold #c9a35c. Composition: broad low coastline in bottom two thirds, open airy sky at top, visible pigment granulation. No flowers, no floral arch, no botanical framing, no people, no text, no letters, no watermark.

### assets/conchas.webp

Use case: illustration-story. Asset type: transparent decorative wedding stationery art, 1024x1024. Primary request: a graceful diagonal composition of three realistically hand-painted Mediterranean seashells, a large delicate scallop shell, one small spiral sea shell and one tiny pearl, joined visually with a very thin loosely curved sand-colored silk cord. Exquisite watercolor and antique natural-history graphite engraving, fine ribbing and translucent watercolor shadows, elegant restrained Mediterranean wedding stationery. Palette ocean blue #1f5c78, sea glass #7c9b8e, periwinkle #8b93c9 and warm cream, muted sand gold #c9a35c. Cluster placed diagonally leaving lots of empty space. Background genuinely transparent, no paper rectangle, no hard drop shadow. No flowers, plants, coral, starfish, words, letters, monogram, watermark.

### assets/ermita.webp

Use case: illustration-story. Asset type: wedding stationery venue illustration, landscape 1536x1024. Original exquisite watercolor and fine ink drawing of a small Mediterranean whitewashed hilltop chapel evoking Ermita de Sant Elm in Sant Feliu de Guixols, Costa Brava: a simple ivory stucco facade, modest curved baroque gable and tiny cross at top, rectangular dark doorway, stone steps, ochre stone terraces, blue Mediterranean sea on horizon. Three-quarter front view, restrained realistic architectural proportions and crafted fine details, sunlight. Loose watery edges fade to ivory cotton paper #fffaf1 all around, subject isolated in middle, lots of blank paper margins. Palette ocean ink #1f5c78, sea glass #7c9b8e, periwinkle shadows #8b93c9, pale golden sand #c9a35c. Elegant hand painted, no flowers, no floral arrangements, no crowd, no people, no labels, no text, no watermark. This is an interpretative illustration for a fictional sample invitation, not a photo.

### assets/finca.webp

Use case: illustration-story. Asset type: wedding stationery fictional venue illustration, landscape 1536x1024. An original exquisite watercolor and very fine ink illustration of an elegant small Catalan coastal masia reception venue at dusk, creamy stone facade, terracotta tile roof, arched windows, broad stone terrace with elegantly laid round tables and a few hanging warm festoon lights, blue Mediterranean sea visible behind one side. This is Finca Els Ginesters, a fictional venue for a sample wedding invitation. No need to depict any real place. Three-quarter architectural view, fine realistic pencil details, relaxed elegant seaside setting, soft watercolor edges completely fading to blank warm ivory cotton paper #fffaf1 on all four edges with generous margins. Muted ocean #1f5c78, sea glass #7c9b8e, periwinkle #8b93c9, sand gold #c9a35c. No floral arrangements, botanical frames, people, text, labels, words or watermarks.

## Construcción

`npm run build:marine` produce `dist-marine/` para `/elena-y-nicolas-v2/`. El build estándar sigue generando la versión anterior. El script raíz construye ambas y `scripts/merge-build.js` las fusiona en `publish/`.

## Validación · 18/10/2026

- Build completo correcto y `npm run check:deploy` correcto: 131 archivos estáticos.
- Wrangler local: hub y cinco invitaciones en 200; rutas y recursos inexistentes en 404.
- 21 comprobaciones HTTP correctas, incluidos los 13 archivos de la nueva ruta.
- Navegador: escritorio de 1280 × 720, móviles de 393 × 851 y 320 × 740, sin desbordamiento horizontal.
- Apertura del sobre y foco del título, música con reproducción y pausa, navegación por ancla,
  cuatro imágenes cargadas y formulario de demostración con foco en el resultado.
- Consola del build de producción sin errores. La revisión móvil es de navegador;
  no se ha realizado la prueba física en Redmi Note 12 Pro 5G.
- Despliegue Cloudflare verificado en invitale.es y workers.dev: 21 comprobaciones correctas
  en cada origen; versión ff385d0b-3acb-48e7-97e5-de6f41b3d396.
