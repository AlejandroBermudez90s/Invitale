# InvitAle — Web portfolio

Página principal de InvitAle: hero, presentación breve, galería de
invitaciones (cada tarjeta abre la invitación real en pestaña nueva) y
contacto.

## Arrancar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Qué tocar para dejarlo listo

1. **`data/invitations.js`** — añade una entrada por cada invitación que
   hayas entregado: `title`, `eventType`, `date`, `coverImage` (ruta en
   `/public/gallery/`) y `url` (el enlace real a la invitación publicada).
2. **`public/gallery/`** — coloca ahí las fotos de portada de cada
   invitación (ratio 4:5 recomendado, para que la galería quede alineada).
3. **`components/Contact.jsx`** — cambia `email`, `whatsapp` (número real
   con prefijo internacional) e `instagram`.
4. **Metadatos** — en `app/layout.jsx`, ajusta `title`/`description` si
   quieres afinar el SEO.

## Estructura

```
app/
  layout.jsx      → fuentes (Prata + Jost), metadatos
  page.jsx         → compone las secciones
  globals.css       → Tailwind + accesibilidad base
components/
  Navbar, Hero, About, Gallery, InvitationCard, Contact, Footer
data/
  invitations.js   → tus proyectos
```

## Notas de marca

- Colores en `tailwind.config.js`: `navy`, `navy-deep`, `gold`, `cream`,
  `ink` — son los mismos tonos de tu identidad ya definida.
- Tipografías: `font-display` (Prata) para titulares y `font-body` (Jost)
  para el resto.
- El isotipo (corazón/lazo de líneas) no está incrustado como imagen —
  el hero usa un trazo SVG ligero como guiño, para no bloquear la decisión
  pendiente sobre las tres líneas diagonales. Cuando cierres esa decisión,
  puedes sustituirlo por tu isotipo final en `components/Hero.jsx`.
