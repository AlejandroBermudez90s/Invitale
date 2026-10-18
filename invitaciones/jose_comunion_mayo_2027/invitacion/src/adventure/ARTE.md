# José · Una misión muy especial

Rediseño para una Primera Comunión infantil con temática Toy Story. Ilustraciones en
gouache y lápiz, azul cielo, papel crema, rojo y amarillo. Los nombres, textos, controles y
horarios son HTML editable. Los personajes proceden de los PNG facilitados anteriormente
por Alejandro y conservados en `../assets/`; no se generaron nuevos personajes.

## Archivos finales

- `../../public/favicon-jose.svg`: versión vectorial autónoma de la insignia original de
  sheriff con la J, sin dependencia de fuentes. Solo la v2 la utiliza como favicon.
- El cierre reutiliza el componente original `InsigniaSheriff.jsx` y su monograma J en Bangers,
  con los colores y el tamaño de la invitación anterior.

- `assets/cohete.webp`: cohete con transparencia, 733 × 1100, 146 KB.
- `assets/habitacion.webp`: pared de nubes y suelo con juguetes, 1536 × 1024, 242 KB.
- `assets/celebracion.webp`: paisaje ficticio de capilla y comida familiar, 1536 × 1024, 515 KB.

Generados con la herramienta integrada ImageGen. Los PNG originales permanecen en
`C:/Users/Usuario/.codex/generated_images/01a14c01-e02f-7690-a5e0-5f31c9e0cad3/`.
Conversión a WebP con Sharp para reducir el peso y mantener el canal alfa del cohete.
Una propuesta adicional con personajes fue rechazada por el generador y no forma parte
de los recursos de esta versión.

## Prompts finales empleados

### Cohete (`exec-2a85d4ab-6da3-4791-8c67-cb8be8b4bb2d.png`)

Use case: illustration-story. Create a single isolated toy rocket illustration for the opening animation of a boy's Toy Story themed First Communion invitation. Portrait composition, rocket pointing straight UP, whole rocket visible including flame with generous transparent margins. Nostalgic hand painted gouache and colored pencil on subtle paper texture, richly detailed yet charming children's book illustration. Red nose cone, creamy ivory metal body, circular blue glass porthole, red fins, tiny yellow star marking; warm golden exhaust flame and a small fluffy exhaust cloud at bottom. Playful vintage space toy, lovingly tactile, elegant storybook art. No text, no lettering, no numbers, no surrounding scene. True transparent background. This is an artwork asset not a website mockup. Save output as a local image file and return its path.

### Habitación (`exec-6819ed10-5648-4f09-b278-3de752c81c58.png`)

Use case: illustration-story. A wide hand-painted gouache illustration of a nostalgic child's empty playroom, cloud-pattern blue wallpaper and honey-colored wooden floor at the bottom. Soft large cream painted clouds on muted pale blue wall, subtle paper grain, visible colored pencil and brush texture. A few scattered original wooden toy building blocks red yellow blue on the floor, a wooden five-point star, a small red and cream tin toy rocket at far right and a yellow blue striped ball. Calm friendly storybook atmosphere. No characters, no people, no animals. Upper two-thirds is spacious airy pale blue cloud wallpaper with very sparse clouds, usable for text overlay, no furniture. Floor occupies bottom quarter. Landscape 3:2. No writing, logos, borders or typography. Full bleed image, straight-on view. Asset is a background illustration, not a webpage mockup.

### Celebración (`exec-7d6c7792-7c39-40ee-8212-e09e59d05b3f.png`)

Use case: illustration-story. Asset: wide landscape gouache children's book illustration for a Toy Story themed boy's First Communion invitation. A sweet imaginary Spanish country chapel with small bell tower and cross on left, sunny meadow with a winding path leading from the chapel to a festive outdoor family lunch on right: rustic table covered in cream cloth, little red yellow blue bunting, wildflowers, toy wooden stars, cake, green trees. A tiny red ivory toy rocket by the table and a yellow ball with blue stripe and red star in foreground subtly connect the Toy Story theme. No people. Sophisticated nostalgic gouache and colored pencil on warm cream paper, visible brushwork, soft irregular painted edges fading into ivory paper, pastoral warm afternoon light, sky blue, buttery yellow, sage green, soft red. Composition wide panoramic, landscape inhabits middle and bottom, airy cream sky at top. Beautiful original illustration, generous detail and texture, not generic vector art, no text or letters or logos. This is an imaginary venue illustration, not depiction of an actual location. Return generated local image file path.

## Publicación y comparación

`npm run build:artistic` genera `dist-v2/` para `/jose-comunion-v2/`.
El build de producción de la raíz incluye la versión original y la artística.
La galería sigue enlazando la original hasta que se elija el resultado definitivo.

## Comportamiento

- Apertura con botón accesible y cuenta atrás 3, 2, 1 seguida de despegue.
- Movimiento reducido: apertura directa, sin animaciones ni revelados al desplazar.
- El contenido queda inerte durante la apertura y el foco pasa al nombre al terminar.
- Los revelados usan IntersectionObserver; sin soporte, el contenido permanece visible.
- El formulario solo simula una respuesta; no usa red, almacenamiento ni datos reales.
- Cuenta atrás con fecha explícita de Madrid: `2027-05-15T12:00:00+02:00`.
- Pendiente de prueba física en Redmi Note 12 Pro 5G: la emulación no la sustituye.

## Revisión ilustrada del 18 de octubre · Portada y ambientación

- Portada solo con Woody y Buzz. Rex, los aliens, Jessie, Hamm y Slinky se distribuyen
  por los márgenes del relato, lugares, itinerario, cuenta atrás, confirmación y regalos.
- Nombre editable en Luckiest Guy, con volumen rojo y azul; fecha y cartel en Bangers.
- Orden solicitado: nombre, frase, fecha, Mi Primera Comunión, Hay días que son toda una aventura.
- Retiradas la fecha de la esquina superior, la inscripción superior de comunión y la nota
  de muestra/ficticios del cierre. El formulario conserva su explicación de funcionamiento.
- `insignia-jose.webp`: 640 × 640, 122 KB, alfa. Basada en el emblema original con J.
- `pelota-bloques.webp`: 640 × 640, 89 KB, alfa. Pelota amarilla/azul con estrella roja y bloques.
- `sombrero-panuelo.webp`: 640 × 427, 76 KB, alfa. Sombrero, pañuelo, cuerda y estrella de sheriff.
- Nuevo favicon de imagen: `public/favicon-jose-v3.png`, 96 × 96, alfa.

Los tres recursos se generaron con ImageGen integrado y se optimizaron con Sharp.
Originales conservados en la carpeta de imágenes generadas de este chat.

### Prompt de la insignia (`exec-5b62bbfc-4343-4cff-aaf0-b314cb0d9701.png`)

Use case: style-transfer. Edit target: the attached simple circular sheriff-star J emblem for José's Toy Story themed First Communion invitation. Preserve its identity: a five pointed yellow sheriff star inside a circular gold ring with red rivets and a single large RED capital J with cream edge in the center. Reimagine as a gorgeous tactile painted toy badge, premium storybook gouache illustration with gently embossed warm brass edges, soft honey yellow enamel, subtle worn painted wood and pencil texture, rich red J like a raised enamel letter. Sophisticated dimensional highlights and tiny painted sparkles, charming nostalgic toy-western personality, not photorealistic and not flat vector. Bold readable simple J; no other writing, no names, no extra letters. Front view symmetrical circular badge, entire badge fully visible with generous transparent padding. No scene or box or background, genuinely transparent background. The asset should be legible at small favicon size as well as a large closing emblem. Retain five points, original palette and J; improve material, depth, texture and craftsmanship. No additional characters or logos.

### Prompt de pelota y bloques (`exec-9b37a284-150d-49b8-bec6-cbf6b086e04e.png`)

Use case: illustration-story. Asset for a Toy Story themed children's First Communion invitation: an isolated charming hand-painted yellow toy ball with thick blue horizontal stripe and one red five-pointed star on the yellow part, three beautifully tactile little red blue yellow wooden alphabet blocks WITHOUT any letters, and two small wooden stars scattered beside it. Gouache and colored pencil picture-book illustration on transparent background, soft painted shadows, warm worn toy textures, cheerful sophisticated art, recognizable nostalgic space-cowboy toy room palette. Compact balanced cluster, ball is main object about two thirds composition, blocks smaller lower right. No characters, no text, no letters, no logos, no wallpaper or floor. Entire group visible with ample transparent margin. Square composition, genuine alpha transparency.

### Prompt de accesorios vaqueros (`exec-4a9e97cd-5278-40f3-86a7-968aa2f73fb2.png`)

Use case: illustration-story. A beautiful small decorative storybook gouache illustration for a child's Toy Story themed First Communion invitation: one warm brown cowboy toy hat resting at a slight angle over a folded red bandana, a short loop of golden rope and a little brass sheriff star to the side. Original charming western toys and dress-up accessories, no character or person, rich handpainted paper texture, colored pencil edges, warm honey ochre, red and cream. Compact horizontal cluster isolated on genuine transparent background with generous transparent margins, full objects visible, tactile painted shadows, elegant children's book art, no text, no lettering, no logo. Companion to a red and cream illustrated toy rocket and a yellow ball with blue stripe. Do not include any surrounding scene or floor.

### Música

`MusicButton.jsx` sustituye el enlace flotante de confirmación por el disco de música habitual.
El usuario eligió aportar su MP3 de Hay un amigo en mí. Al recibirlo, guardarlo como
`src/adventure/assets/hay-un-amigo-en-mi.mp3` y recompilar: el glob lo conecta automáticamente.
Admite también m4a/ogg/wav con el mismo nombre. No se solicita ninguna URL de audio mientras
no exista el archivo; el control muestra el estado disponible próximamente.
No hay reproducción automática: el audio comienza al tocar el disco, con volumen .3 y bucle.
