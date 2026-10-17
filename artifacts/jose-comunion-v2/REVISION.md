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

## Publicación pendiente

No se ha publicado. El 18 de octubre de 2026 la revisión automática de permisos rechazó
`npm run deploy`: cambiaría el Worker de producción completo y exige autorización explícita
del usuario para el despliegue externo. El build está preparado para publicar cuando la dé.
El dominio real `https://invitale.es/jose-comunion/` se verificó respondiendo 200 desde Cloudflare.

## Arte y capturas

Los recursos finales y sus prompts están documentados en
`invitaciones/jose_comunion_mayo_2027/invitacion/src/adventure/ARTE.md`.
`portada-movil.jpg` y `portada-escritorio.jpg` muestran la invitación después de la apertura.
