# José · Una misión muy especial

Rediseño para una Primera Comunión infantil con temática Toy Story. Ilustraciones en
gouache y lápiz, azul cielo, papel crema, rojo y amarillo. Los nombres, textos, controles y
horarios son HTML editable. Los personajes proceden de los PNG facilitados anteriormente
por Alejandro y conservados en `../assets/`; no se generaron nuevos personajes.

## Archivos finales

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
