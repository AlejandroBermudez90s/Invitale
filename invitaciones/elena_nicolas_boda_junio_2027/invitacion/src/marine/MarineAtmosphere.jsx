import { useId, useState } from 'react'
import { Shell } from './MarineArt'

export function WaterBubbles() {
  return <div className="en-water-bubbles" aria-hidden="true">{Array.from({ length: 20 }, (_, i) => <span key={i} style={{
    '--bubble-x': `${(i * 37 + 9) % 100}%`, '--bubble-size': `${7 + (i * 7) % 18}px`,
    '--bubble-time': `${19 + (i * 11) % 18}s`, '--bubble-delay': `${-i * 3.7}s`,
    '--bubble-drift': `${i % 2 ? 28 : -32}px`,
  }}><i /></span>)}</div>
}

// La máscara revela la acuarela mediante pasadas de pincel independientes, de izquierda a derecha y al revés.
export function PaintedImage({ src, alt, className = '' }) {
  const id = `en-brush-${useId().replace(/[^a-zA-Z0-9]/g, '')}`
  const [loaded, setLoaded] = useState(false)
  return <svg className={`en-painted-image en-paint-reveal ${loaded ? 'en-image-loaded' : ''} ${className}`} viewBox="0 0 1536 1024" role="img" aria-label={alt}>
    <title>{alt}</title>
    <defs><mask id={id} maskUnits="userSpaceOnUse" x="0" y="0" width="1536" height="1024">
      {Array.from({ length: 13 }, (_, i) => {
        const y = i * 82 + 15
        const d = i % 2 ? `M1640 ${y} Q1190 ${y - 15} 775 ${y + 8} T-100 ${y - 5}` : `M-100 ${y} Q360 ${y + 14} 780 ${y - 8} T1640 ${y + 5}`
        return <path key={i} className="en-paint-stroke" d={d} pathLength="1" fill="none" stroke="white" strokeWidth="122" strokeLinecap="round" style={{ '--stroke-delay': `${i * .2}s` }} />
      })}
    </mask></defs>
    <image href={src} width="1536" height="1024" preserveAspectRatio="xMidYMid meet" mask={`url(#${id})`} onLoad={() => setLoaded(true)} />
  </svg>
}

function Conch() {
  return <svg viewBox="0 0 120 100" fill="none" aria-hidden="true">
    <path className="en-sea-wash" d="M13 34 30 32 37 22 52 29 59 23 70 34c17 0 35 19 29 37l13 13-23-2C72 95 40 80 35 66L20 61 23 49Z" />
    <path d="m8 29 22 3 7-10 15 7 7-6 11 11c18 0 36 19 29 37l13 13-23-2C72 95 40 80 35 66L20 61l3-12L8 29Z" />
    <path d="M30 32c-1 12 0 22 5 34M37 24c-3 14-3 31 4 45M52 29c-7 10-7 30 3 47M59 25c-6 13-4 37 7 56M70 34c-7 14-4 35 9 49M77 37c-7 12-3 27 6 34M86 44c-6 8-5 18 3 24M99 71c-6 0-12 2-16 9m12-23c-9-12-19-9-18-1 0 8 11 13 14 7 2-4-3-8-6-6" />
    <path d="m24 41 8 1m-8 7 9 2m8-13 8 2m-9 8 8 2m-5 8 8 1m8-22 8 3m-8 8 7 3m-4 10 7 2M74 43l5 3M69 53l6 4m-3 9 6 3" opacity=".55" />
  </svg>
}

function Nautilus() {
  return <svg viewBox="0 0 110 110" fill="none" aria-hidden="true"><path className="en-sea-wash" d="M91 76C111 42 80 9 50 16 12 23 6 66 28 87c19 18 48 12 63-11Z" /><path d="M91 76C111 42 80 9 50 16 12 23 6 66 28 87c19 18 48 12 63-11Zm0 0L69 58" /><path d="M91 76C98 48 74 29 53 35 31 41 29 68 44 78c15 9 34-4 29-19-5-13-23-13-27-2-4 11 8 20 15 12 5-6-3-12-6-7" /><path d="m45 17 7 18M27 28l13 15M17 48l17 6M17 67l18-2m-9 20 14-13m5 23 4-15m17 13-3-14m17 5-10-10M63 16l-2 18m22-10-9 14m22 4-14 6m15 13-13-2" /></svg>
}

function Rope({ knot = false }) {
  const d = knot ? 'M-4 52C21 47 34 20 57 26s26 41 5 49-41-14-25-30 41-13 46 4-10 25-23 16S46 35 71 35s32 36 53 31' : 'M-8 21C20 25 18 86 55 79s43-62 13-60-40 51-10 56 42-34 70-29'
  return <svg viewBox="0 0 120 100" fill="none" aria-hidden="true"><path className="en-rope-shadow" d={d} /><path className="en-rope-strand" d={d} /><path className="en-rope-braid" d={d} /></svg>
}

function SeaStar() {
  return <svg viewBox="0 0 100 100" fill="none" aria-hidden="true"><path className="en-sea-wash" d="m51 9 11 28 29-1-23 21 12 31-29-17-28 17 10-31L10 36l30 1Z" /><path d="m51 9 11 28 29-1-23 21 12 31-29-17-28 17 10-31L10 36l30 1Z" /><path d="m51 17 0 40m-32-17 32 17 31-17M29 79l22-22 23 23" strokeDasharray="1 4" /><circle cx="51" cy="56" r="5" /></svg>
}

function Pearls() {
  return <svg viewBox="0 0 100 80" fill="none" aria-hidden="true"><circle className="en-sea-wash" cx="36" cy="42" r="17" /><circle cx="36" cy="42" r="17" /><path d="M24 38q1-8 9-9M47 49q-3 5-9 6" /><circle cx="69" cy="54" r="10" /><path d="M63 50q1-3 4-3" /><path d="M12 67q38 5 76-1" opacity=".4" /></svg>
}

const motifs = { conch: <Conch />, nautilus: <Nautilus />, shell: <Shell />, rope: <Rope />, knot: <Rope knot />, star: <SeaStar />, pearls: <Pearls /> }
const compositions = {
  story: ['conch', 'rope', 'pearls'], place: ['shell', 'nautilus', 'rope'], celebration: ['knot', 'shell', 'conch'],
  day: ['nautilus', 'rope', 'star'], dress: ['shell', 'conch', 'knot'], rsvp: ['rope', 'pearls', 'shell'], footer: ['conch', 'knot', 'nautilus'],
}

export function MarineDecoration({ scene }) {
  return <div className={`en-marine-decoration en-decoration-${scene}`} aria-hidden="true">{compositions[scene].map((motif, i) => <div key={i} className={`en-decor-reveal en-sea-motif en-sea-motif-${i + 1} en-motif-${motif}`}>{motifs[motif]}</div>)}</div>
}
