# José — Primera Comunión, tema Toy Story (invitación de ejemplo, datos ficticios)

Invitación construida como ejemplo de portfolio para InvitAle: una Primera Comunión infantil
ambientada en Toy Story (cielo de nubes y estrellas, insignia de sheriff, rótulos tipo cartel
de juguete). **Todos los datos (nombre, iglesia, restaurante, fecha, cuenta bancaria) son
ficticios.**

## Datos del evento
- Comulgante: José
- Fecha: sábado 15 de mayo de 2027, 12:00 h (ceremonia)
- Ceremonia: Parroquia San Roque (ilustrada, sin foto real)
- Celebración: Restaurante La Pradera (ilustrado, sin foto real), 13:30 h
- Fecha límite RSVP: 15 de abril de 2027
- Slug de URL pública: `invitale.es/jose-comunion`
- Autorizada como ejemplo público en el hub: sí (es el propósito de esta invitación)

## Paleta y tipografía (exclusivas de este evento — "Al infinito y más allá")
- Cielo: `--sky` `#4fa8e0` / azul profundo `--sky-deep` `#2f7ec4` / azul pálido `--sky-pale`
  `#cfe9fb` · Nube `--cloud` `#ffffff`
- Rojo juguete `--red` `#e0432b` / rojo oscuro `--red-deep` `#b52f1c`
- Amarillo `--yellow` `#ffcd29` / amarillo oscuro `--yellow-deep` `#f0a500` / estrella `--star`
  `#ffe066`
- Verde césped `--green` `#4c9a4a` · Madera `--wood` `#a9702f` / `--wood-deep` `#7a4e21`
- Crema `#fff8ec`, marfil `#fffdf8`, carbón (texto) `#33261a`
- Tipografía: Baloo 2 (display/UI redondeada), Bangers (rótulo tipo cartel/cómic, uso puntual
  vía `.rotulo-juguete`), Quicksand (cuerpo)

## Personajes de Toy Story
Woody, Buzz, Jessie, Rex y Hamm son personajes con derechos de autor de Disney/Pixar: no se
han recreado sus diseños a mano. Alejandro facilitó los recortes PNG oficiales en
`src/assets/` (`buzz.png`, `jessie.png`, `rex.png`, `hamm.png`, `woody.png`, fondo blanco, no
transparente), que se usan tal cual mediante el componente reutilizable
`PersonajeToyStory.jsx` (en `Ilustraciones/`):
- Reparte cada recorte dentro de una tarjeta/insignia redondeada (fondo marfil, borde amarillo,
  sombra) para que el fondo blanco del PNG se lea como una pegatina intencionada en vez de un
  recorte roto — funciona igual si en el futuro se sustituyen por versiones con transparencia
  real.
- Si no recibe `src`, sigue mostrando un marcador con el nombre (útil si se añaden más
  personajes — Slinky, los Aliens — más adelante).
- Reparto actual: Buzz, Hamm, Jessie y Rex flotando en la cabecera (`Cabecera.jsx`, imitando
  la composición del vídeo de referencia que dio Alejandro); Woody recibiendo en el lugar
  destacado de la fiesta (`LugarDestacado.jsx`).
- Toda la ambientación adicional (cielo de nubes/estrellas, insignia de sheriff, paleta roja/
  amarilla/azul, rótulos con contorno tipo cartel de juguete, banderines, cofre de madera en
  vez de sobre) sigue siendo ilustración original propia, sin copiar el diseño de ningún
  personaje.

## Diferencias respecto al patrón de Alejandro-Esthefany / Elena-Nicolás
- Sustituye el sobre de boda por un cofre de madera de juguetes con sello de estrella de
  sheriff (`SobreIntro`, mismas clases de `Cabecera.css` reaprovechadas).
- Sustituye la guirnalda floral (`Wreath`) por `InsigniaSheriff.jsx`, una estrella de sheriff
  dentro de un círculo con remaches.
- Sustituye `FloralCorner`/`Pajarito` por `NubeCorner` (nube + estrellas) y `Pajarito.jsx`
  reescrito como estrella fugaz — mismos nombres de fichero que el patrón base para no romper
  la convención de imports, pero contenido SVG distinto.
- Incluye un campo "Alergias o intolerancias" en `ConfirmarAsistencia`, pensado para una
  fiesta infantil.
- `Regalo` (antes "Dinero") reenfocado como "Un detalle para José" con IBAN ficticio.
- `ConfirmarAsistencia` simula el envío en local (sin backend real), igual que el resto de
  invitaciones de ejemplo.

## Pendiente

## Rediseño artístico de octubre de 2026

- Comparación en paralelo: `/jose-comunion-v2/`, sin sustituir la ruta ni la galería actuales.
- `src/adventure/AdventureApp.jsx` y `AdventureApp.css`, prefijo `jo-`.
- La v2 reutiliza la insignia de sheriff con J del footer original. Su favicon es
  `public/favicon-jose.svg`, seleccionado por el modo artístico de Vite; la original conserva el suyo.
- `npm run build:artistic` genera `dist-v2/`; el build raíz compila y fusiona ambas versiones.
- Apertura mediante un cohete ilustrado: cuenta atrás 3, 2, 1 y despegue. Apertura inmediata
  si el dispositivo prefiere movimiento reducido, control por teclado y transferencia de foco.
- Gouache, textura de papel, azul cielo, crema, rojo y amarillo. Baloo 2, Quicksand y Caveat.
- Ilustraciones originales generadas con ImageGen en `src/adventure/assets/`; los personajes
  se reutilizan desde los PNG existentes de `src/assets/`. Ver `src/adventure/ARTE.md`.
- Conserva ceremonia, direcciones, fecha, horario y límite RSVP del ejemplo. No hay cuenta
  bancaria. El formulario muestra que es una demostración antes y después de completarlo.
- Todos los datos y los paisajes siguen siendo ficticios; los mapas son búsquedas de ejemplo.
- Si se consiguen versiones con fondo transparente real de Woody, Buzz, Jessie, Rex y Hamm (o
  se añaden Slinky/los Aliens), sustituir los PNG de `src/assets/` sin tocar el resto del
  componente.
- Generar una portada real (`public/gallery/jose-comunion/portada.png`) para el hub, capturada
  de la cabecera ya con los personajes.
- Diseñar un favicon propio (de momento usa el isotipo de marca InvitAle como placeholder).
- Revisar el IBAN ficticio y los textos si esta invitación pasa a usarse como plantilla real.

### Revisión posterior de la v2: ambientación y portada

- `AdventureStory.css` contiene los ajustes de esta ronda: Luckiest Guy para José, Bangers
  para fecha y cartel, textos mayores y solo Woody/Buzz en la portada.
- `ToyDecorations.jsx` reparte Rex, Jessie, Slinky, aliens y Hamm fuera de la cabecera,
  junto a nuevos adornos ilustrados de pelota/bloques y sombrero/pañuelo.
- La insignia final ahora es `assets/insignia-jose.webp`, creada a partir del emblema con J;
  el favicon artístico es `public/favicon-jose-v3.png`.
- Se retiró la nota de muestra/datos ficticios del cierre por petición del usuario.
- `MusicButton.jsx` sustituye al flotante de asistencia. El usuario eligió aportar su MP3
  de Hay un amigo en mí: guardarlo como `src/adventure/assets/hay-un-amigo-en-mi.mp3`.
  Mientras no exista el archivo, no se solicita audio y el disco permanece en estado próximo.
