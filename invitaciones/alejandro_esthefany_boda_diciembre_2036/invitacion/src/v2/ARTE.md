# Alejandro & Esthefany · invitación definitiva

La versión artística elegida se publica como única invitación en
`https://invitale.es/alejandro-y-esthefany/`. El código conserva la carpeta `src/v2/`
para evitar cambios innecesarios en los componentes, pero ya no existe una entrada alternativa.
`vite build` genera `dist/` con la base definitiva. Se han retirado los componentes,
fotografías, portadas y propuestas descartadas de la versión anterior.

## Recursos activos

- `assets/botanica-lisianthus.webp`: dos arreglos de lisianthus blancos, rosados y melocotón,
  con hojas salvia; sin frutos verdes. Ilustración generada y editada, 1024 × 1536.
- `assets/sobre-floral-ligero.webp`: sobre marfil con dos arreglos pequeños, 948 × 1659.
- `assets/sobre-floral-papel.webp`: misma composición sin sello, para separar la solapa y el sello.
- `assets/iglesia-majada-ilustracion.webp`: interpretación de la Iglesia de la Purísima,
  La Majada, Mazarrón, Murcia; referencia Turismo de Mazarrón:
  https://visitamazarron.com/page/show/la-majada .
- `assets/alcazar-ilustracion-detallada.webp`: retrato arquitectónico ilustrado del Alcázar,
  con tinta, lápiz y acuarela, a juego con la iglesia. Referencia https://www.alcazardesegovia.com/ .
- `assets/alcazar-acuarela.webp`: acuarela panorámica de la sección del lugar.
- `assets/favicon-monograma.png`: monograma floral del cierre exportado a PNG de 96 × 96.
- `assets/musica-fondo.mp3`: pista aportada por Alejandro, bucle con volumen inicial del 30%,
  carga al pulsar y sin autoplay. `media.js` permite sustituirla mediante variable Vite.
- `public/social/alejandro-esthefany-monograma-v1.jpg`: el mismo monograma renderizado
  sobre marfil a 1200 × 630, JPEG optimizado para compartir enlaces.
- `public/gallery/alejandro-y-esthefany/portada-v2.webp`, en la raíz del hub: captura de
  la portada posterior al sobre, encuadrada en 4:5 como la tarjeta de la galería.

## Animación y lectura

`EnvelopeIntro` abre la solapa y disuelve el sobre sin mover la cámara. El contenido
se habilita al terminar y el foco vuelve al título. `WrittenText` conserva texto accesible
completo mientras escribe los caracteres visibles. La botánica y los dibujos ambientales
aparecen progresivamente. Quince pétalos atraviesan toda la invitación sin capturar pulsaciones.
El movimiento reducido elimina las esperas y animaciones decorativas.

`MusicButton` tiene un aviso pequeño sin fondo, flecha y texto «reproducir música».
Se oculta tras la primera pulsación y recuerda la preferencia local. Se conserva su clave
`invitale:alejandro-esthefany-v2:music-hint-dismissed` para respetar visitas anteriores.
El disco y las notas siguen los eventos reales del audio.

`RSVP` se abre con «Rellenar confirmación de asistencia» y simula el envío localmente.
No hay servicio de confirmaciones real en esta muestra.

## Compartir y publicar

El HTML inicial incluye canonical, Open Graph y Twitter con la URL definitiva e imagen
HTTPS absoluta; el robot puede leerlos sin ejecutar React ni abrir el sobre. El favicon
es el icono del navegador; la vista previa de WhatsApp utiliza la imagen Open Graph.
Si se cambia esa imagen, versionar el nombre para distinguirla de las copias en caché.
Los mensajes ya enviados pueden conservar su vista previa anterior.

La dirección comparativa y sus recursos redirigen con 301 mediante `public/_redirects`
del hub. La galería enlaza a la dirección definitiva. Comprobar las respuestas públicas y
los recursos referenciados por el HTML desplegado, no los hashes del build local.

## Validación de la sustitución · 17 de octubre de 2026

Build completo y `check:deploy` correctos (109 recursos). La vista previa de Cloudflare
sirve las cuatro invitaciones y el hub en 200, y una ruta inexistente en 404. Las dos
reglas 301 llevan la ruta comparativa y sus recursos a la dirección definitiva. Se comprueba
el HTML con agentes WhatsApp y Facebook: metadatos únicos y públicos, JPEG de 1200 × 630,
favicon PNG de 96 × 96 y scripts/estilos en 200. La galería muestra la captura de 600 × 750
con ambas esquinas, fecha de diciembre de 2036 y enlace a la invitación definitiva.
