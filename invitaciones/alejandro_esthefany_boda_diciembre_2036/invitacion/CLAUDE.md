# Alejandro & Esthefany — Boda de muestra

Única invitación publicada: `https://invitale.es/alejandro-y-esthefany/`.
La versión artística elegida por Alejandro sustituye a la anterior. Sus componentes y
recursos viven en `src/v2/`; `src/main.jsx` carga esta aplicación en todos los modos.
El build estándar genera `dist/`. El hub incorpora este build una sola vez y redirige
la antigua dirección comparativa `/alejandro-y-esthefany-v2/` a la definitiva.

## Datos del evento
- Muestra de portfolio autorizada; nombres, fecha y datos de invitados son ficticios.
- Fecha: 26 de diciembre de 2036. Ceremonia a las 19:00.
- Ceremonia: Iglesia de la Purísima de La Majada, Mazarrón, Murcia.
- Banquete: Alcázar de Segovia, 21:00.
- Fecha límite RSVP: 26 de junio de 2036.
- RSVP de demostración local, sin backend. No presentar los envíos como confirmaciones reales.

## Diseño y comportamiento
- Papel marfil, salvia, rosa y melocotón; lisianthus en ambas esquinas de portada.
- Bodoni Moda en títulos, Cormorant Garamond en texto y Alex Brush en acentos.
- Sobre a pantalla completa: solapa y disolución lenta, sin zoom ni carta que salga.
- Instrucción mínima: «toca el sello para abrir la invitación», sin fondo ni recuadro.
- Texto legible, escritura progresiva, botánica suave, aves y pétalos de rosa.
- Ilustraciones detalladas de iglesia y Alcázar, además de la acuarela panorámica.
- Música aportada por Alejandro, sin reproducción automática: disco flotante a la izquierda,
  gira solo durante la reproducción. Aviso «reproducir música» hasta la primera pulsación.
- Respetar movimiento reducido, foco de teclado, lectura y ambas esquinas en móviles pequeños.
- Favicon y vista previa de enlaces basados en el monograma floral A & E del cierre.
- La galería usa una captura de la primera sección después de abrir el sobre.

## Comprobaciones
Leer `src/v2/ARTE.md` para los recursos activos. Desde la raíz: `npm run build`,
`npm run check:deploy` y `npm run preview:site`. Validar la URL final, la redirección,
la galería, los recursos Open Graph, todas las demás invitaciones y el 404.
