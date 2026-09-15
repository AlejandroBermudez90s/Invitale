# InvitAle — Arquitectura del monorepo

## Qué es
`invitale` es el repo del hub de marca (Next.js App Router + Tailwind CSS) de InvitAle, negocio
de invitaciones digitales de Alejandro Bermúdez. Desde este mismo repo y el mismo site de
Netlify se sirven además las invitaciones de cada evento, cada una en su subruta
(`invitale.es/{slug}`), como builds independientes fusionados en un único despliegue.

**Decisión de arquitectura (no renegociar sin motivo):** un único site de Netlify, un único
build fusionado. Nada de proxies entre plataformas ni sites separados por evento — se probó
esa vía (proxy Netlify→Vercel) y se descartó a favor de tenerlo todo bajo el mismo dominio y
pipeline de build.

## Estructura de carpetas
```
invitale/                              ← raíz del repo, NO reorganizar lo existente
├── app/                                Next.js App Router (el hub, tal cual está)
├── components/                         Componentes del hub (About, Hero, Navbar, etc.)
├── data/                                invitations.js — listado de eventos para el portfolio
├── public/
│   ├── brand/                          Imagotipo InvitAle (4 variantes PNG)
│   └── gallery/{slug}/                 Imágenes de portada para mostrar el evento como
│                                        ejemplo en el hub — NO es la invitación en sí
├── next.config.js                      output: 'export', trailingSlash: true
├── package.json                        scripts build:hub / build:{evento} / build
├── scripts/
│   └── merge-build.js                  fusiona hub + cada evento en publish/
├── invitaciones/
│   └── {slug_carpeta}/                 ej. andrea_quinceanera_mayo_2026 (sin ñ/acentos)
│       └── invitacion/                 build independiente (Vite+React+Bootstrap)
│           └── vite.config.js          base: '/{slug-url}/'  ej. '/andrea-15/'
└── netlify.toml                        (opcional: solo para 404/trailing-slash, no proxy)
```

## Cómo se genera el sitio final
1. `next build` (con `output: 'export'`) genera `out/` en la raíz — el hub, 100% estático.
2. Cada evento se construye con su propio `npm run build` dentro de
   `invitaciones/{slug_carpeta}/invitacion/`, generando su `dist/`.
3. `scripts/merge-build.js` copia `out/` a la raíz de `publish/`, y el `dist/` de cada evento
   a `publish/{slug-url}/`.
4. Netlify publica `publish/` como site único. Build command: `npm run build`.
   Publish directory: `publish`.

**Para añadir un evento nuevo**, tocar exactamente 4 sitios:
1. Nueva carpeta `invitaciones/{slug_carpeta}/invitacion/`
2. Nueva línea `"build:{evento}": "cd invitaciones/{slug_carpeta}/invitacion && npm install && npm run build"` en `package.json`, encadenada en el script `build`
3. Nueva entrada `{ carpeta, slugUrl }` en el array de `scripts/merge-build.js`
4. `base: '/{slug-url}/'` en el `vite.config.js` de ese evento

## Identidad de marca InvitAle (solo aplica a `app/`, `components/`, `public/brand/`)
- Dorado: `#c9a300`
- Oscuro cálido (fondo dark / dorso de tarjeta): `#252527` — no confundir con navy `#081033`
- Papel (fondo light / frente de tarjeta): `#fdfaf5`
- Crema (fondo secundario): `#f2ece0`
- Tipografía: Prata (display/wordmark), Jost (cuerpo/UI), Pinyon Script (frases de acento)
- Tagline: "Diseñado para recordar"
- Frases de acento: "Tu momento / Tu recuerdo / Tu historia" (Pinyon Script)
- Imagotipo: corazón/lazo en línea dorada + wordmark serif, 4 variantes en `public/brand/`
- Decisión pendiente: líneas diagonales del isotipo (quitar / trazo de pluma / lazo) — sin
  resolver, relevante si se usa en materiales impresos

## Aislamiento de estilos — regla dura, tres capas que nunca se mezclan
1. **Marca InvitAle** (tokens de arriba) — solo en `app/`, `components/`, `public/brand/`.
2. **Theming de cada evento** — paleta propia del cliente, vive solo dentro de
   `invitaciones/{slug}/invitacion/`. Ej. Andrea-15 usa navy `#081033`, exclusivo de ese evento.
3. **Entre eventos entre sí** — el theming de uno no debe aparecer en otro.

Regla de CSS ya validada: prefijo de clase padre (`.cabecera .boton`, nunca clases globales
sueltas) dentro de cada build de evento, para que Bootstrap/componentes no choquen.

## Visibilidad y privacidad
- Toda invitación es privada por defecto (accesible solo por enlace directo/QR).
- Solo aparece en el portfolio del hub (`data/invitations.js` + `public/gallery/{slug}/`) si
  el cliente autoriza explícitamente mostrarla como ejemplo.

## Convención por evento
Cada `invitaciones/{slug}/invitacion/` debería tener su propio `CLAUDE.md` local con:
paleta y tipografía específicas de ese evento, fecha, nombre de cliente, slug de URL pública,
y si está autorizado como ejemplo público o no.

## Stack técnico
- Hub: Next.js (App Router, export estático) + Tailwind CSS
- Cada evento: React + Vite + Bootstrap 5 (patrón validado en Andrea-15)
- RSVP: actualmente embebido en el mismo build del evento (ver `ConfirmarAsistencia.jsx` en
  Andrea-15) vía Google Apps Script. Migración futura prevista a Supabase (Auth + RLS,
  consumido desde el cliente) para una página privada de resultados por evento — no requiere
  funciones server-side de Next.js, compatible con el export estático.

## Migraciones ya hechas
- Andrea-15 migrado desde un repo/deploy independiente en Vercel a
  `invitaciones/andrea_quinceanera_mayo_2026/invitacion/`, sirviendo en `invitale.es/andrea-15`
  vía el build fusionado descrito arriba.

## Pendiente
- Separar `resultados_asistencia` como build independiente por evento (hoy vive embebido)
- Assets SVG para portadas de Highlights de Instagram
- Tarjeta de visita (frente): densidad de contenido, divisor ornamental, QR con degradado

## Preferencias de trabajo de Alejandro
- Prefiere contenido de archivo listo para copiar/pegar, no explicaciones de pasos manuales
- Itera en rondas: placeholder → assets reales → pulido/animación
- Cuestiona el feedback de diseño con razones — espera respuestas sustantivas
- Minimalismo y elegancia no negociables — se recorta complejidad decorativa si choca con esto
- Testing real en Redmi Note 12 Pro 5G / Chrome — vigilar `height: 100vh` + padding sin
  `box-sizing: border-box`
