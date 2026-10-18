# Andrea · Mis quince años

La invitación original sigue en `/andrea-15/`, con su formulario existente y su galería.
El rediseño comparativo vive en `src/v2/` y se construye con `npm run build:artistic`
en `dist-v2/`, para `/andrea-15-v2/`. No convertirlo en la ruta definitiva sin elección
del usuario. `npm run dev:artistic` permite revisarlo localmente.

## Contenido que conservar
- La fotografía original de Andrea en `src/assets/portada.webp` es protagonista de la
  portada. El usuario pidió expresamente mantenerla. No sustituirla por una ilustración.
- Sábado 16 de mayo de 2026, 19:00 h. Hotel Playa Grande, Puerto de Mazarrón, Murcia.
- Azul rey reservado para la quinceañera; vestimenta elegante y ganas de bailar.
- Música original `public/tiempo_de_vals.mp3`, solo al pulsar el control.
- La fecha ya ha pasado: mostrar un recuerdo en lugar de una cuenta atrás de ceros.
- La cuenta de regalo se conserva de la versión original; no inventar otra.

## Diseño comparativo
Papel marfil, azul noche #101e49, azul acuarela #416b9a y oro viejo #a48b60.
Cormorant Garamond y Pinyon Script. Sobre con sello de mariposa, apertura lenta,
fotografía protagonista, flores azules señoriales, monograma, carta, fecha,
lugar, vestimenta, regalos y formulario a la vista. Sin acordeones ni Bootstrap.
Todo el texto y los controles son HTML editable; las flores son acuarelas propias.
Respetar movimiento reducido, navegación por teclado y pantallas de 360 px.

El formulario de la versión comparativa es explícitamente de prueba: no envía ni
guarda datos. El original usa Google Apps Script; no enviar respuestas de prueba a
ese servicio. La conectividad real debe decidirse antes de sustituir la original.

## Verificación
Desde la raíz: `npm run build`, `npm run check:deploy`, `npm run preview:site`.
Revisar ambas rutas de Andrea, las otras tres invitaciones, el hub y el 404.
La galería continúa apuntando al original. La v2 lleva `noindex, nofollow`.
Una revisión móvil de navegador no equivale a prueba física en Redmi.
