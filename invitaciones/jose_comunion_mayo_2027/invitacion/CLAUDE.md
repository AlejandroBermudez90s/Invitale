# José · Primera Comunión · Invitale

## Versión definitiva

El usuario autorizó el 18/10/2026 sustituir la invitación antigua por este rediseño,
retirar la implementación anterior y publicar únicamente `/jose-comunion/`.
Los enlaces `/jose-comunion-v2/` redirigen permanentemente a la ruta definitiva,
incluidos sus recursos, mediante `public/_redirects` del monorepo.

- `src/main.jsx` carga directamente `src/adventure/AdventureApp.jsx`.
- Build estándar Vite en `dist/`, con base `/jose-comunion/`. Sin build v2 ni Bootstrap.
- Galería autorizada: captura real de la portada abierta en
  `public/gallery/jose-comunion/portada-aventura.webp` de la raíz.
- La marca se escribe **Invitale**.

## Diseño y contenido

- Temática Toy Story para comunión: apertura con cohete, cuenta atrás 3, 2, 1 y despegue.
- Portada solo con Woody y Buzz; Rex, Jessie, Hamm, Slinky y aliens ambientan el resto.
- Gouache y textura de juguete: azul cielo, crema, rojo, amarillo; Baloo 2, Quicksand,
  Caveat y Bangers. Clases con prefijo `jo-`, estilos en `AdventureApp.css` y `AdventureStory.css`.
- Nombre ilustrado `assets/jose-rotulo.webp`, con texto accesible José; insignia final
  `assets/insignia-jose.webp`, reutilizada como favicon `public/favicon-jose-v3.png`.
- Fecha: sábado 15 de mayo de 2027, 12:00 h (Madrid). El año queda a la derecha;
  la hora debajo de la fila de fecha, seguida del cartel Mi Primera Comunión y la frase.
- Ceremonia San Roque, celebración La Pradera y fechas/horario son datos de ejemplo.
  RSVP demostrativo sin envío ni almacenamiento. Conservar la explicación en el formulario.
- No hay cuenta bancaria. El cierre no lleva la antigua nota de muestra/datos ficticios.

## Música y accesibilidad

- MP3 aportado por el usuario: `src/adventure/assets/hay-un-amigo-en-mi.mp3`.
  Hay un amigo en mí, archivo original de 2.074.753 bytes, sin alterar.
- `MusicButton.jsx`: inicio al pulsar, volumen .3 y bucle; sin reproducción automática.
  Indicativo pequeño con flecha sin fondo que desaparece en el primer toque.
  Disco con luz suave, giro y nota animada durante la reproducción; pausa al salir.
- Contenido inerte durante apertura y foco transferido al nombre. Controles accesibles
  con teclado, estados de carga/error, movimiento reducido sin animaciones.
- Revisar móvil y escritorio. La emulación no sustituye la prueba física en Redmi Note 12 Pro 5G.

Los personajes reutilizan los PNG aportados en `src/assets/`. Las ilustraciones generadas,
referencias y prompts están documentados en `src/adventure/ARTE.md`.
