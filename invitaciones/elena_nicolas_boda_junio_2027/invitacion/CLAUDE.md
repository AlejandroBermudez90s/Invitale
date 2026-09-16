# Elena & Nicolás — Boda (invitación de ejemplo, datos ficticios)

Invitación construida como ejemplo de portfolio para InvitAle, replicando el estilo de una
invitación digital ilustrada tipo "wooowinvites" (acuarela costera, sello de lacre, cuenta
atrás, código de vestimenta). **Todos los datos (nombres, lugares, fecha) son ficticios.**

## Datos del evento
- Novios: Elena & Nicolás
- Fecha: sábado 12 de junio de 2027, 19:00 (ceremonia)
- Ceremonia: Ermita de Sant Elm (ilustrada, sin foto real), Costa Brava
- Banquete: Finca Els Ginesters (ilustrada, sin foto real), 21:00
- Fecha límite RSVP: 12 de abril de 2027
- Slug de URL pública: `invitale.es/elena-y-nicolas`
- Autorizada como ejemplo público en el hub: sí (es el propósito de esta invitación)

## Paleta y tipografía (exclusivas de este evento — "Costa Azul")
- Azul océano: `--sage-deep` `#1f5c78` / azul salvia `--sage` `#7c9b8e` / azul pálido
  `--sage-pale` `#dbe9ee`
- Hortensia: `--terracotta` `#8b93c9` / hortensia oscuro `--terracotta-deep` `#5f6bab`
- Verde mar (`--leaf`): `#5f8a76` · Pétalo hortensia (`--blush`): `#a7b3dd`
- Crema `#f7f2e6`, marfil `#fffaf1`, carbón (texto) `#223142`, dorado arena `#c9a35c`
- Tipografía: Playfair Display (display), Mulish (cuerpo), Yesteryear (script/acento)

Los nombres de variable CSS (`--sage`, `--terracotta`, `--blush`, etc.) se reutilizan
deliberadamente del patrón de Alejandro & Esthefany para poder reaprovechar sin cambios los
componentes `FloralCorner`, `Wreath`, `Pajarito`, `DefsGlobales` y `TexturaPapel` — solo
cambian los valores hexadecimales, así que las mismas guirnaldas se repintan en tonos
azul/hortensia en vez de salvia/terracota. Sigue siendo theming exclusivo de este evento:
vive solo en este `App.css`, no se importa desde otro evento ni desde el hub.

## Ilustraciones nuevas (no presentes en Andrea-15 ni en Alejandro-Esthefany)
- `VentanaMar.jsx` — arco abierto al mar al atardecer con la silueta de la pareja; fondo de
  la cabecera a pantalla completa.
- `ArcoCostero.jsx` — arco de flores frente al mar, imagen destacada del lugar.
- `ErmitaSantElm.jsx` / `FincaGinesters.jsx` — ilustraciones de ceremonia y banquete en
  `Ubicacion`, sustituyendo a la foto real que sí existe en Alejandro-Esthefany.
- `SiluetasBaile.jsx` — siluetas bailando, usadas en el nuevo bloque de vestimenta.

Todas son ilustraciones planas originales (no son capturas ni copias de ninguna plantilla
comercial); solo toman la referencia de composición (arco/ventana al mar, sello de lacre,
paleta de colores) del vídeo que pidió el cliente como referencia de estilo.

## Diferencias respecto al patrón de Alejandro-Esthefany
- **Incluye código de vestimenta** (`CodigoVestimenta/`, nuevo componente): paleta de
  colores sugerida + ilustración de siluetas bailando. Alejandro-Esthefany lo omite a
  propósito; aquí se pidió explícitamente para imitar el vídeo de referencia.
- **Sin sección de dinero/regalo** (`Dinero`): el vídeo de referencia no la muestra: se
  prioriza fidelidad visual al vídeo. Se puede añadir más adelante con el mismo patrón que
  Alejandro-Esthefany si el cliente lo pide.
- `SobreIntro` usa un sello de lacre con las iniciales "E&N" en script en vez de un icono de
  flor.
- `ConfirmarAsistencia` simula el envío en local (sin backend real), igual que
  Alejandro-Esthefany, al ser una invitación de ejemplo.

## Pendiente / a decidir con el cliente
- Sustituir las ilustraciones de ceremonia/banquete/cabecera por fotografías reales si en
  algún momento se dispone de ellas (Alejandro le pidió a Claude que solicitara los assets
  gráficos que faltasen; de momento todo es ilustración vectorial propia).
- Añadir audio de fondo si se decide una pista.
- Revisar textos legales/IBAN si esta invitación pasa a usarse como plantilla para un
  evento real.
