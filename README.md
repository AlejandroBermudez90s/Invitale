# InvitAle — Web e invitaciones digitales

Hub de marca en Next.js con export estático y cuatro invitaciones React/Vite independientes.
Todos los builds se fusionan en `publish/`, que es el único directorio que se despliega.
La migración a Cloudflare Workers Static Assets está preparada en este repositorio; la
activación de la cuenta, la conexión con GitHub y el cambio del dominio se realizan en Cloudflare.

## Desarrollo

Node.js: versión de `.node-version`. Instalar dependencias con `npm ci`.

- `npm run dev`: hub en desarrollo. No sirve los builds Vite de las invitaciones.
- `npm run build`: compila el hub y todas las invitaciones, y genera `publish/`.
- `npm run preview:site`: sirve el resultado completo con Wrangler para probar las rutas reales.
- `npm run check:deploy`: comprueba la configuración de Cloudflare sin publicar.
- `npm run deploy`: publica el último `publish/` generado; ejecutar antes `npm run build`.

Los builds de cada invitación usan `npm ci` y sus propios lockfiles para mantener versiones
reproducibles. `merge-build.js` comprueba que existan el hub, su 404 y todas las invitaciones
antes de sustituir `publish/`.

## Configuración de Cloudflare

Crear un **Worker** conectado al repositorio `AlejandroBermudez90s/Invitale` con:

| Ajuste | Valor |
| --- | --- |
| Nombre del Worker | `invitale` |
| Rama de producción | `main` |
| Directorio raíz | Raíz del repositorio |
| Comando de build | `npm run build` |
| Comando de deploy | `npm run deploy` |

Wrangler está fijado en `package.json`. La carpeta de archivos estáticos se define en
`wrangler.jsonc` como `./publish`; no debe cambiarse a `out`, porque allí solo está el hub.
El sitio no necesita un servidor Next.js, un adaptador SSR ni un script Worker.

Las URLs de carpeta se normalizan con barra final. Una ruta inexistente devuelve la página
404 exportada por Next.js, sin reenviar al hub ni a otra invitación.

### Activación del dominio

1. Crear/iniciar sesión en la cuenta Cloudflare y autorizar su integración de GitHub para
   este repositorio. Completar personalmente las contraseñas y la aceptación de términos.
2. Desplegar y comprobar primero la dirección `workers.dev` asignada por Cloudflare.
3. Añadir `invitale.es` a Cloudflare y revisar que se conserven todos los registros DNS
   existentes, incluidos correo y verificaciones. El dominio puede seguir registrado en DonDominio.
4. Aplicar en DonDominio los nameservers concretos que asigne Cloudflare y esperar a que la
   zona quede activa. Revisar DNSSEC si está habilitado antes de cambiar nameservers.
5. En el Worker, añadir `invitale.es` y `www.invitale.es` como dominios personalizados.
   Resolver con el asistente los registros web que todavía apunten al hosting anterior.
6. Verificar HTTPS, la portada, imágenes, las cuatro rutas y el 404 usando el dominio final.
   Después retirar los despliegues automáticos de Netlify para evitar builds duplicados.

La configuración no incluye rutas del dominio todavía: así la primera publicación puede
probarse en `workers.dev` sin modificar el sitio que esté en producción.

## Rutas que deben funcionar

- `/`
- `/andrea-15/`
- `/alejandro-y-esthefany/`
- `/elena-y-nicolas/`
- `/jose-comunion/`
- `/jose-comunion-v2/` (rediseño artístico con apertura de cohete, para comparar)

Comprobar también los enlaces sin barra final y una ruta inexistente. Cada invitación debe
cargar sus propios scripts, estilos, imágenes y audio. Los formularios de las muestras de
Alejandro/Esthefany, Elena/Nicolás y José simulan el envío y no son un backend RSVP real.

La invitación definitiva de Alejandro y Esthefany se genera desde `src/v2/` con el build
Vite normal en `dist/` y se publica en `/alejandro-y-esthefany/`. La versión anterior
se ha retirado. La galería muestra la portada posterior a la apertura del sobre.
`public/_redirects` conserva los enlaces compartidos con `/alejandro-y-esthefany-v2/`,
redirigiéndolos permanentemente a la dirección definitiva, incluidos sus recursos.

Elena y Nicolás utiliza la invitación marina de `src/marine/` como única versión en
`/elena-y-nicolas/`. La implementación anterior se ha retirado y la galería muestra la
portada costera elegida. Los enlaces con `/elena-y-nicolas-v2/` y sus recursos redirigen
permanentemente a la dirección definitiva. El build estándar genera únicamente `dist/`.

## Añadir un evento

José conserva la versión actual en `/jose-comunion/`. El rediseño Toy Story de `src/adventure/`
se compila con `npm run build:artistic` en `dist-v2/` y se sirve en `/jose-comunion-v2/`.
El build general incluye ambas versiones. La galería conserva su enlace actual mientras
se compara el rediseño. La nueva apertura tiene cuenta atrás y despegue; con movimiento
reducido la invitación se abre directamente. El RSVP sigue siendo una demostración local.

1. Crear `invitaciones/<carpeta>/invitacion/` con su tema y documentación local.
2. Añadir su script de build en `package.json` y encadenarlo en `build`.
3. Registrarlo en `EVENTOS` dentro de `scripts/merge-build.js`.
4. Configurar `base: '/<slug>/'` en su `vite.config.js`.

Añadirlo a `data/invitations.js` y `public/gallery/` únicamente si está autorizado como
muestra pública. Los estilos y recursos de cada evento son independientes de la marca.

## Referencias

- [Archivos estáticos en Workers](https://developers.cloudflare.com/workers/static-assets/)
- [Builds conectados a Git](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)
- [Dominios personalizados](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)
