# Alejandro & Esthefany · versión artística

Muestra comparativa en `/alejandro-y-esthefany-v2/`. La invitación original conserva su ruta y sus componentes. Ambas se compilan desde el mismo proyecto Vite, con entradas y estilos separados según el modo de compilación.

Se conservan la paleta salvia, terracota y crema, los nombres, los lugares y el itinerario del ejemplo. La fecha se unifica en el 26 de diciembre de 2036 a las 19:00 de España peninsular. El formulario es una demostración explícita: no realiza peticiones ni conserva respuestas. La cuenta bancaria es ficticia.

## Recursos

Generados con la herramienta integrada de imágenes de Codex. Se conservan los originales en la carpeta de imágenes generadas del usuario; las copias WebP optimizadas que usa la web están en `assets/` (aproximadamente 900 KB entre las tres).

- `botanica.webp`: acuarela original con espacio para textos editables.
- `alcazar-acuarela.webp`: ilustración generada utilizando como referencia la fotografía existente `src/assets/alcazar-segovia.jpg`; no sustituye una representación arquitectónica documental.
- `sobre-relieve.webp`: reutiliza la imagen marfil de relieve floral y sello de cera generada previamente y aprobada visualmente por Alejandro en este chat. El texto y la apertura se implementan en HTML/React.

## Prompts finales de las nuevas ilustraciones

### Botánica

Use case: illustration-story. Asset type: finished background art for a luxury mobile wedding invitation, portrait 2:3 composition. Create original fine-art botanical watercolor on warm ivory handmade cotton paper (#f6f1e7), sophisticated Spanish wedding stationery. Delicate loose garden roses and peonies in muted terracotta and pale peach, tiny ivory blossoms, airy olive and eucalyptus branches in dusty sage green. Flowers concentrated in upper left corner and lower right corner, some very fine botanical stems near the border. Painterly pigment blooms, detailed translucent petals, visible paper tooth, organic deckled watercolor washes. The central 65% must be very calm blank ivory negative space for live typography, no lettering or text, no frame line, no inset cards, no people, no objects except botanicals. Refined and richly artistic, restrained saturation, editorial wedding illustration, not vector clipart, not a photograph, no watermark.

### Alcázar

Use case: style-transfer. Asset type: landscape watercolor illustration for an elegant wedding invitation. Use the attached photograph as the exact architectural reference: retain the recognizable Alcázar de Segovia silhouette, the left tall conical roof and towers, the large square crenellated keep at right, rocky hill and stone walls, this precise viewpoint. Translate it into a masterful loose watercolor painting on warm ivory cotton paper. Warm limestone and restrained terracotta, gray slate roofs, dusty sage greenery, luminous pale peach afternoon sky instead of night illumination. Atmospheric soft washes, subtly inked architectural details, richly textured pigments, irregular watercolor edges fading naturally into blank ivory around ALL four sides. Castle sits in middle with breathing room, landscape 3:2 composition, nothing cropped. Romantic, graceful, premium bespoke wedding stationery. No text, no typography, no imaginary fairy-tale towers, no people, no watermark.

## Verificación

- `npm run build` desde la raíz compila también la v2 y la incluye en `publish/`.
- `npm run check:deploy` comprueba el paquete de Cloudflare.
- `npm run preview:site` sirve ambas versiones para revisar apertura, formulario de demostración, enlaces, cuenta atrás y desbordamientos en móvil y escritorio.
- Desarrollo solo de esta versión: `npm run dev -- --mode artistic` dentro de esta invitación.
- El movimiento reducido elimina la animación de entrada. El texto y los controles siguen siendo HTML, no texto incrustado en imágenes.
- Solo la v2 declara su paleta clara y el marcador de fidelidad cromática [documentado por Dark Reader](https://github.com/darkreader/darkreader/blob/main/CONTRIBUTING.md#disabling-dark-reader-on-your-site): la recoloración del navegador de pruebas estaba ocultando las acuarelas de fondo. No se cambia ninguna preferencia del navegador.
