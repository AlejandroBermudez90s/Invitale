# InvitAle

- Trabajar y responder en español. Editar los archivos directamente y comprobar los cambios.
- Leer `CLAUDE.md` para la arquitectura y el `CLAUDE.md` de cada invitación antes de modificarla.
- Alejandro ha autorizado guardar y subir a GitHub los cambios de sus encargos. Usar ramas para trabajo en curso y mantener `main` listo para producción.
- La migración autorizada es a Cloudflare Workers Static Assets: un sitio con el hub Next.js exportado y los builds Vite fusionados en `publish/`. Ver `README.md` y `wrangler.jsonc`.
- Mantener rutas estables, en minúsculas y con guiones. Verificar siempre las invitaciones, además de la portada del hub, al cambiar el despliegue.
- Separar los estilos y recursos de marca de los de cada evento. Cada invitación conserva su tema y build independiente.
- La marca es minimalista; las invitaciones pueden ser artísticas y ornamentadas según el encargo. Para ilustración elaborada, utilizar recursos gráficos apropiados y conservar textos y controles editables en código.
- Prioridad al móvil, rendimiento, accesibilidad y preferencia de movimiento reducido. Una vista previa del navegador no sustituye a una prueba física en el Redmi Note 12 Pro 5G.
- Publicar en la galería únicamente las muestras autorizadas. Un enlace directo no equivale a control de acceso. No guardar secretos ni datos privados de invitados en el repositorio.
- Comprobar el conjunto con `npm run build`, `npm run check:deploy` y una vista previa mediante `npm run preview:site`. Las rutas inexistentes deben devolver 404.
