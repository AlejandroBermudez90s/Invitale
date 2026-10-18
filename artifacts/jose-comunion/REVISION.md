# José · Invitación definitiva · 18/10/2026

URL pública: https://invitale.es/jose-comunion/
Cloudflare: ec5292f9-e19a-484f-a3bd-dc22cf076116.

## Resultado

- Rediseño de Toy Story como única versión, con la implementación anterior y Bootstrap retirados.
- Rótulo ilustrado de José a partir de la insignia, nombre accesible conservado.
- Año 2027 a la derecha de la fecha y 12:00 h debajo.
- MP3 aportado sin alterar: 2.074.753 bytes; hash idéntico al archivo del usuario.
- Indicativo pequeño y transparente con flecha; desaparece en el primer toque.
- Durante la reproducción: luz suave, giro del disco y movimiento de la nota. Pausa funcional.
- Galería con captura real de la primera página abierta, optimizada como WebP de 800 × 1000.
- Nombre de marca corregido a Invitale en footer, metadatos e instrucciones.

## Verificación

- `npm run build`: hub y cuatro invitaciones compilados y fusionados correctamente.
- `npm run check:deploy`: OK, 120 archivos, sin errores.
- Vista previa Wrangler y dominio público: cinco rutas principales 200; ruta inexistente 404.
- 19 recursos referenciados comprobados desde el HTML/JS/CSS desplegado, incluidos rótulo,
  favicon y MP3; metadatos canónicos, imagen y enlace del hub correctos.
- V2 con y sin barra: redirección 301 a la definitiva; los recursos v2 redirigen también.
- Normalización automática de `/jose-comunion` a `/jose-comunion/` comprobada.
- Antiguo favicon, portada y recurso inexistente: 404. Sin directorio publicado v2.
- Audio reproduce realmente en navegador, readyState 4, duración 128,15 s, tiempo creciente;
  aria-pressed activo, indicativo retirado y ambas animaciones activas. Pausa comprobada.
- Revisión visual a 393 × 851, 320 × 740, 800 × 1000 y 1280 × 900; sin desbordamiento horizontal.
- Movimiento reducido conserva la regla general que anula animaciones, incluidos disco y nota.
- Redirección v2 comprobada también mediante navegador en producción.

El formulario conserva su carácter de demostración local. Prueba física en Redmi pendiente;
las comprobaciones anteriores usan emulación y navegador de escritorio.
