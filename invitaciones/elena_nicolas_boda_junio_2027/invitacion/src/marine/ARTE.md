# Elena y Nicolás · Carta del Mediterráneo

Versión marina elegida como definitiva el 18 de octubre de 2026. Se publica únicamente en `/elena-y-nicolas/`; la invitación anterior se ha retirado y la galería muestra la nueva portada. Los enlaces con `-v2` redirigen con 301.

## Dirección de arte

Papelería marfil con azul océano, hortensia, verde mar y arena de la invitación original. Composición costera propia: acuarela de cala y velero, conchas con cordón fino, sello azul con relieve de concha, monograma E/N y oleaje dibujado. Las plantas que aparecen forman parte del paisaje; no hay decoración floral.

### Revisión de ambientación, animación y tipografía

Se reduce el tamaño de las conchas del sobre y la portada y se elimina la ilustración grande
de vestimenta. `MarineAtmosphere.jsx` añade veintiún pequeños motivos distribuidos entre siete
secciones: conchas, caracolas, náutilos, estrellas, perlas, cabos y nudos. Son grabados SVG editables
que amplían los motivos vectoriales existentes; no se han generado nuevas imágenes raster.

Veinte burbujas transparentes caen lentamente sobre la lectura, sin capturar pulsaciones.
Las cuatro acuarelas se descubren mediante trece pasadas de pincel alternas, en 3,75 segundos,
cuando entran en pantalla y la imagen está cargada. Con movimiento reducido aparecen completas
y se eliminan las burbujas. La decoración de tinta también tiene trazado progresivo.

Todos los textos e interfaz de esta versión usan únicamente Cormorant Garamond (regular,
seminegrita y cursiva). Se elimina el aviso de muestra del cierre y «Diseñado para recordar»
queda encima de «Invitale». El formulario sigue indicando que no envía respuestas.

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

`npm run build` genera únicamente `dist/`, con base `/elena-y-nicolas/`. `src/main.jsx` importa directamente MarineApp. El script raíz fusiona este build una sola vez en `publish/`. Canonical, Open Graph, Twitter y favicon usan la ruta definitiva; el hub redirige los enlaces con `-v2` y sus recursos.

## Validación de la versión definitiva · 18/10/2026

- `npm run build` completo y `npm run check:deploy` correctos; 112 recursos estáticos.
- Una sola invitación en `/elena-y-nicolas/`; se ha retirado el build comparativo y el código anterior.
- 23 comprobaciones HTTP correctas en Wrangler local y en `https://invitale.es`:
  hub, cuatro invitaciones, 404, recursos referenciados por el HTML, canonical, galería y tres redirecciones 301.
- Los scripts de la implementación anterior y la portada PNG retirada devuelven 404.
- Galería: captura de la portada abierta optimizada a WebP de 600 × 750, con nombres, fecha y costa.
- Navegador: galería nueva y enlace definitivo correctos; apertura, cuatro acuarelas, veinte burbujas
  y consola sin errores en la ruta final. Las revisiones a 320 y 393 píxeles corresponden al mismo diseño.
- La revisión móvil es de navegador; no se ha realizado una prueba física en Redmi Note 12 Pro 5G.
- Despliegue Cloudflare verificado: versión 92f7f687-680e-4535-9766-488a3e1767f3.
