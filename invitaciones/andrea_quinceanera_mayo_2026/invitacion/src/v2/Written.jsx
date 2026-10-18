import { Fragment } from 'react'

// Mantiene las uniones de la tipografía manuscrita: se escribe cada palabra
// mediante una máscara por pasos, sin separar las letras en nodos independientes.
export default function Written({ children }) {
  const text = String(children)
  const pace = Math.min(60, 4500 / Math.max(1, text.length))
  let position = 0
  return <span className="a-written">
    <span className="a-sr">{text}</span>
    <span aria-hidden="true">{text.split(/(\s+)/).filter(Boolean).map((word, index) => {
      const start = position
      position += word.length
      if (/^\s+$/.test(word)) return <Fragment key={index}>{word}</Fragment>
      return <span className="a-ink-word" key={index} style={{ '--ink-delay': `${Math.round(start * pace)}ms`, '--ink-duration': `${Math.max(140, Math.round(word.length * pace))}ms`, '--letters': word.length }}>{word}</span>
    })}</span>
  </span>
}
