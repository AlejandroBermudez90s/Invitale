// El lector de pantalla recibe el texto completo; la escritura es solo visual.
export default function WrittenText({ text, pace = 55 }) {
  const characters = Array.from(text)
  const step = Math.min(pace, 3200 / Math.max(1, characters.length))
  return <span className="ae-written">
    <span className="ae-reading-text">{text}</span>
    <span aria-hidden="true">{characters.map((character, index) => <span className="ae-ink-character" key={index} style={{ '--ink-delay': `${Math.round(index * step)}ms` }}>{character}</span>)}</span>
  </span>
}
