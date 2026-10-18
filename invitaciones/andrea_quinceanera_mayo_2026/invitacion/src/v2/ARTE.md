# Andrea · Un jardín para mis quince

## Revisión: fotografía verificada, escritura y hotel

La portada ahora importa EXACTAMENTE la misma fotografía que utiliza el CSS de la invitación original publicada: `../assets/portada.jfif` (2444 × 3673). La anterior selección `portada.webp` correspondía a otra toma y se retiró de este diseño. Coincidencia byte por byte con https://invitale.es/andrea-15/assets/portada-DAnXD3y_.jfif. SHA-256: d97596b57d0f4b4713612af949eaf6bc64495e9e12321e3b96ce1fa53b929880.

Texto y foto ocupan espacios separados, también en móvil. `Written.jsx` revela la tinta mediante opacidad por palabra y un máximo de 2,6 segundos de secuencia por fragmento. Conserva el flujo inline normal, sin máscaras ni márgenes negativos, y una única copia accesible del texto. Se inicia al entrar cada texto en pantalla; los resultados nuevos del formulario se incorporan con MutationObserver. Movimiento reducido muestra todo directamente.

- `assets/hotel-playa-grande-acuarela.webp`: 1450 × 967, ilustración raster del hotel. Se revela en 14 pinceladas CSS alternas durante 4,8 segundos, sin SVG.
- `assets/mariposa-azul.webp`: 320 × 320 con alpha; reemplaza todas las mariposas SVG. Seis mariposas ascienden continuamente por la pantalla con posiciones horizontales y ritmos distintos. La portada protege la fotografía.
- Las flores respiran mediante una rotación CSS menor de un grado, sin mover la composición.

### Referencias arquitectónicas

Fuente: [web oficial del Hotel Playa Grande](https://www.hotel-playagrande.com/).
Fotografías de referencia: https://www.hotel-playagrande.com/img-portada/portada-1418207724.jpg y https://www.hotel-playagrande.com/img-articulos/secciones-ampliadas/3_68.jpg.
Las referencias se guardan fuera del sitio en `C:/Invitale/backups/referencias-playa-grande/`; solo se distribuye la ilustración creada con ImageGen integrado.

### Prompt del hotel (ImageGen integrado)

Use case: style-transfer. Asset type: detailed architectural watercolor for an elegant blue quinceanera invitation. Reference images are architectural references of the SAME real Hotel Playa Grande in Puerto de Mazarron, Spain, not edit targets. Paint this recognizable real hotel from a gently elevated frontal three-quarter view: preserve its low ochre cream Mediterranean building, characteristic angular wings, tiled pitched roofs with the row of little dormers, the central curved entrance porch, hotel rooftop sign structure, palm trees, the promenade and Mediterranean sea and rocky headland behind it. Reference 1 is the main architectural reference; reference 2 clarifies the overall wings and layout. Fine hand-drawn blue-gray graphite and ink linework under delicate watercolor washes, nuanced and detailed like bespoke European illustrated event stationery. Muted sand and ivory building, cornflower and ultramarine water, sage palms. A little blue hydrangea and rose foliage on the lower outer edges only. Landscape 1536x1024, generous warm ivory cotton paper margins, irregular soft painted edges fading to matching warm ivory #faf6ec. No people in foreground, no cars, no photorealism, no vectors, no giant text, no decorative arch, do not invent palace architecture. Small rooftop sign may be impressionistic. The building should be the clear focal point with full roof and entrance visible.

### Prompt de la mariposa (ImageGen integrado)

Use case: illustration-story. Asset type: isolated transparent blue butterfly for animated fine art invitation. ONE beautiful delicate blue morpho butterfly, top view with both wings open symmetrically, body vertical, richly detailed cornflower and royal blue watercolor wings, translucent pale blue edges, tiny ivory speckles and fine dark blue botanical engraving veins, elegant realistic anatomy and refined hand painted paper pigment. Centered with generous transparent margin, square composition. A real alpha transparent background. No flowers, no scenery, no cast shadow, no ground, no lettering, no vectors, no frame. Only one butterfly, suitable as a small raster decoration for aristocratic blue floral stationery.


Recursos generados con la herramienta integrada de ImageGen. Ilustraciones originales de acuarela; nunca sustituyen la fotografía de Andrea ni contienen el texto de la invitación.

- `assets/jardin-azul.webp`: papel ilustrado para la apertura. WebP 1200 × 1800.
- `assets/ramo-azul.webp`: ramo con transparencia real para esquinas y composiciones. WebP 850 × 1275, conserva alpha.
- `../assets/portada.jfif`: fotografía exacta de la original publicada, sin retoque generativo.
- `../../public/social-andrea.jpg`: detalle floral para enlaces, 1200 × 630.

## Prompt de la lámina

Use case: illustration-story. Asset type: premium quinceañera digital invitation botanical painting, portrait 1024x1536. Create an exquisite fine-art watercolor on warm ivory handmade cotton paper. A romantic aristocratic blue garden framing a HUGE empty ivory center: sumptuous royal blue and dusty cornflower roses, blue hydrangeas, delphiniums and delicate tiny white blossoms, silvery sage foliage, a few graceful blue butterflies. Composition: flowers grow abundantly in the bottom third and ascend sparsely along left and right margins, upper 60 percent mostly open ivory paper, center absolutely blank for editable typography. Rich painterly pigment granulation, delicate botanical engraving details, soft irregular watercolor edges dissolving into paper, European heirloom stationery aesthetic, sophisticated and youthful, powder blue with touches of midnight cobalt, antique pale gold extremely subtle. No people, no dress, no architecture, no text, no letters, no numbers, no frame lines, no mockup, no drop shadow. Beautiful detailed blue flowers, not purple.

## Prompt del ramo

Use case: illustration-story. Asset type: transparent botanical corner for a fine art quinceanera invitation. An exquisite asymmetric loose bouquet of royal blue garden roses, powder blue hydrangea, long delicate blue delphinium stems, tiny ivory flowers, muted silver sage leaves and one blue butterfly. One cohesive botanical composition, abundant at bottom left tapering gracefully up and right. Hand painted traditional watercolor with rich pigment and fine botanical etched details, heirloom aristocratic stationery, elegant delicate edges. Isolated on a genuinely transparent background, no white ground, no vase, no text, no border, no shadow, no mockup. Leave generous transparent space around the bouquet. Portrait composition.

## Movimiento

Apertura de solapa y disolución de 2,4 segundos. Revelado de secciones y escritura con IntersectionObserver, una sola vez. Seis mariposas raster suben de 110vh a -20vh, con ritmos lineales de 22 a 38 segundos y alas de 5 segundos. Nunca oscilan verticalmente ni invierten el sentido. Sin captura de puntero. El hotel se dibuja en 14 pinceladas alternas. Con movimiento reducido, apertura inmediata, imágenes y textos visibles sin animación. Música original activada solo por el visitante.

## Notas que se descubren

La cuenta y el formulario se muestran después de pulsar un medallón ovalado de papel con marco fino, mariposa y frase manuscrita. Una indicación subrayada «Toca para…» y una flecha dejan clara la acción también en móvil; la flecha cambia al abrir. Los paneles usan `hidden` inicialmente y conservan sus controles de foco, `aria-expanded` y `aria-controls`. Los mensajes siguen siendo HTML editable. El mapa y el envío usan frases manuscritas y mariposas, sin botones rectangulares. La confirmación sigue siendo local y demostrativa.

## Galería

La portada del hub es `public/gallery/andrea-15/portada-jardin-v2.webp`, encuadre vertical 4:5 de la portada abierta de esta versión. La tarjeta abre `/andrea-15-v2/`. La antigua invitación y sus recursos permanecen sin cambios en `/andrea-15/`, únicamente accesible por su URL directa desde fuera de la galería.

