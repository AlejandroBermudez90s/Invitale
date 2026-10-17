// Motivos de tinta: el contenido y los controles permanecen como texto editable.
export function Shell({ className = '' }) {
  return <svg className={className} viewBox="0 0 100 90" fill="none" aria-hidden="true">
    <path d="M38 76C24 74 6 53 9 36c2-11 11-12 17-10 0-15 14-19 24-12 10-7 24-3 24 12 7-2 16 0 18 10 3 17-15 38-30 40l-2 8H40z" />
    <path d="m50 75 0-59M44 75 29 27m9 46L15 37m41 38 15-48m-9 46 24-36M37 77q13-6 26 0M41 82h18" />
  </svg>
}

export function Waves({ className = '' }) {
  return <svg className={`en-waves ${className}`} viewBox="0 0 600 100" fill="none" aria-hidden="true">
    <path d="M-10 50c70-60 130 60 205 0S330 0 405 50s140 10 210-15" />
    <path d="M-10 64c70-60 130 60 205 0S330 14 405 64s140 10 210-15" />
    <path d="M-10 78c70-60 130 60 205 0S330 28 405 78s140 10 210-15" />
  </svg>
}

export function Monogram() {
  return <div className="en-monogram" role="img" aria-label="Monograma de Elena y Nicolás">
    <svg viewBox="0 0 180 165" fill="none" aria-hidden="true">
      <path d="M90 5c43 0 75 34 75 77s-32 77-75 77S15 125 15 82 47 5 90 5Z" />
      <path d="M90 11c39 0 69 30 69 71s-30 71-69 71-69-30-69-71 30-71 69-71Z" opacity=".35" />
      <path d="M41 116c15-14 29 14 45 0s30-14 46 0m-86 8c14-13 28 13 42 0s28-13 42 0" />
    </svg><span className="en-mono-e">E</span><i>&amp;</i><span className="en-mono-n">N</span>
  </div>
}

export function DayIcon({ name }) {
  const paths = {
    arrival: <><path d="M5 31c4-6 6-7 11-2s8 4 13-1M6 23h24L19 8v15M17 10v13" /><path d="M16 26 8 10v13" /></>,
    chapel: <><path d="M6 31h24M10 30V16l8-7 8 7v14M18 3v6m-3-3h6M15 30V21h6v9" /><circle cx="18" cy="16" r="2" /></>,
    toast: <><path d="m5 5 10 3-3 11c-1 5-10 2-9-3L5 5Zm26 0L21 8l3 11c1 5 10 2 9-3L31 5ZM7 21 4 30m-3-1 7 2m21-10 3 9m-4 1 7-2M5 12l8 2m10 0 8-2M17 4l1 3m-1 7 1-3" /></>,
    dinner: <><ellipse cx="19" cy="18" rx="9" ry="11" /><ellipse cx="19" cy="18" rx="6" ry="8" /><path d="M4 4v11m-3-11v7q3 5 6 0V4M4 15v17M32 4v28m0-28q-6 8 0 12" /></>,
    dance: <><circle cx="13" cy="21" r="9" /><circle cx="23" cy="21" r="9" /><path d="m15 8 3-5 3 5-3 3-3-3Zm-4-3L9 2m16 3 2-3" /></>,
    stars: <><path d="m18 3 3 9 10 1-8 6 3 10-8-6-8 6 3-10-8-6 10-1 3-9ZM31 27v7m-3-3h6M4 2v7M1 5h6" /></>,
  }
  return <svg viewBox="0 0 36 36" fill="none" aria-hidden="true">{paths[name] || paths.arrival}</svg>
}
