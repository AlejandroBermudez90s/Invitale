# Alejandro & Esthefany — Boda (invitación de ejemplo, datos ficticios)

Invitación construida como ejemplo de portfolio para InvitAle. **Todos los datos (nombres,
lugares, fecha, cuenta bancaria) son ficticios**, salvo los propios lugares reales usados
como localización de ejemplo (Iglesia de la Majada y Alcázar de Segovia).

## Datos del evento
- Novios: Alejandro & Esthefany
- Fecha: 26 de diciembre de 2036, 19:00 (ceremonia)
- Ceremonia: Iglesia de la Majada, Segovia
- Banquete: Alcázar de Segovia, 21:00
- Fecha límite RSVP: 26 de junio de 2036
- Slug de URL pública: `invitale.es/alejandro-y-esthefany`
- Autorizada como ejemplo público en el hub: sí (es el propósito de esta invitación)

## Paleta y tipografía (exclusivas de este evento)
- Salvia: `#8a9a7e` / salvia oscuro `#5f6f52` / salvia pálido `#e8ecdf`
- Terracota: `#c17552` / terracota oscuro `#a15d3f`
- Crema: `#f6f1e7`, marfil: `#fffdf8`, carbón (texto): `#3a352f`, dorado envejecido: `#b6905a`
- Tipografía: Cormorant Garamond (display), Work Sans (cuerpo), Alex Brush (script/acento)

Estilo: minimalista elegante con ornamentación botánica de línea fina (rama/hojas, ver
`src/componentes/Ornamento/Ornamento.jsx`), sin fotografías reales de pareja.

## Diferencias respecto a la plantilla base (Andrea-15)
- Sin sección de dress code (pedido explícito: es una boda, se sobreentiende ir elegante).
- Sin el easter egg "Atrapado" / "NO TOCAR" (pedido explícito: invitación seria, no jocosa).
- Sin audio de fondo por ahora (pendiente de que el cliente aporte una pista); el
  componente `Audio` no está incluido, se puede reintroducir cuando haya mp3 definitivo.
- `ConfirmarAsistencia` simula el envío en local (sin backend real) al ser una invitación
  de ejemplo — no usar el patrón de Google Apps Script de Andrea-15 aquí si se convierte
  en invitación real algún día.
- Nuevo hook `src/hooks/useReveal.js` (IntersectionObserver) para animaciones de aparición
  al hacer scroll, aplicado de forma más extensa que en Andrea-15 (introducción, detalles,
  ubicación, dinero, footer).
- Ubicación muestra dos tarjetas (ceremonia + banquete) en vez de una.

## Pendiente
- Sustituir el IBAN ficticio y textos si esta invitación pasa a usarse como plantilla real.
- Añadir audio de fondo cuando el cliente decida la pista.
