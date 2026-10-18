import { Fragment } from 'react'

// Las palabras conservan el flujo natural del párrafo y sus ligaduras.
// La tinta aparece progresivamente, sin máscaras que recorten los glifos.
export default function Written({ children }) {
  const text = String(children)
  const pace = Math.min(45, 2600 / Math.max(1, text.length))
  let position = 0
  return <span className="a-written">
    {text.split(/(\s+)/).filter(Boolean).map((word, index) => {
      const start = position
      position += word.length
      if (/^\s+$/.test(word)) return <Fragment key={index}>{word}</Fragment>
      return <span className="a-ink-word" key={index} style={{ '--ink-delay': `${Math.round(start * pace)}ms` }}>{word}</span>
    })}
  </span>
}
