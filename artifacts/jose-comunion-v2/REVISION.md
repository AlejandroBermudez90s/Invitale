# José · Rediseño Toy Story

Ruta de comparación: `/jose-comunion-v2/`.
Vista previa local: http://127.0.0.1:8787/jose-comunion-v2/

## Comprobado

- Build completo del monorepo con `npm run build`: correcto.
- Tras los ajustes visuales, recompilados los builds afectados de José y regenerado `publish/`.
- `npm run check:deploy`: correcto, 137 archivos estáticos.
- Wrangler local: 200 en portada, Andrea, las dos bodas, José original y José v2.
- Las rutas inexistentes y los recursos inexistentes devuelven 404.
- Los 13 recursos de la nueva invitación extraídos de su HTML, JavaScript y CSS responden 200.
- Apertura por clic y por Enter: cuenta atrás, despegue, desbloqueo del contenido y foco al nombre.
- Vista móvil a 393 × 851: sin imágenes rotas y sin scroll horizontal (scrollWidth 378).
- Vista de escritorio a 1280 × 900: portada completa con los personajes y el suelo ilustrado.
- RSVP de muestra: probado con asistencia y con ausencia; la confirmación indica que no envía datos.
- Consola del navegador: sin errores observados.
- Comprobado que la versión original sigue cargando en su ruta.
- No se ha realizado prueba física en Redmi ni emulación de movimiento reducido; esta preferencia
  está contemplada por código para evitar la secuencia de despegue y los revelados.

## Publicación verificada

Publicada el 18 de octubre de 2026 tras la autorización explícita del usuario: «sí, publica en v2».
URL: https://invitale.es/jose-comunion-v2/
Cloudflare Worker: https://invitale.alejandro2003bermudez.workers.dev/jose-comunion-v2/
Versión inicial de Cloudflare: `39fce938-a3e7-475e-9e0c-0832bd7441ed`.
Actualización del logo de José y favicon: `d2d274b2-f1a0-4f25-873a-358913487459`.
Build completo y dry-run correctos (139 archivos); comprobadas las seis rutas, los 404
y los 13 recursos de la v2 después de esta actualización. El cierre reutiliza el emblema
original con la J en Bangers y el favicon es un SVG autónomo de esa insignia.
Se comprobaron ambas direcciones: seis rutas con respuesta 200, rutas inexistentes con 404
y los 13 recursos extraídos del HTML, JavaScript y CSS publicados con respuesta 200.
La invitación original y el enlace de la galería permanecen en `/jose-comunion/`.

## Arte y capturas

Los recursos finales y sus prompts están documentados en
`invitaciones/jose_comunion_mayo_2027/invitacion/src/adventure/ARTE.md`.
`portada-movil.jpg` y `portada-escritorio.jpg` muestran la invitación después de la apertura.
