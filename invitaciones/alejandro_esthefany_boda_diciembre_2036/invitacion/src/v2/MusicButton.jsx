import { useEffect, useRef, useState } from 'react'
import { backgroundMusicUrl } from './media'

const MUSIC_HINT_KEY = 'invitale:alejandro-esthefany-v2:music-hint-dismissed'

function shouldShowHint() {
  if (!backgroundMusicUrl) return false
  try { return window.localStorage.getItem(MUSIC_HINT_KEY) !== '1' }
  catch { return true }
}

export default function MusicButton() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showHint, setShowHint] = useState(shouldShowHint)

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = .3
    return () => audio.pause()
  }, [])

  async function toggle() {
    if (showHint) {
      setShowHint(false)
      try { window.localStorage.setItem(MUSIC_HINT_KEY, '1') }
      catch { /* Si el navegador bloquea el almacenamiento, se oculta en esta visita. */ }
    }
    const audio = audioRef.current
    setError('')
    if (!backgroundMusicUrl) return
    if (!audio.paused) { audio.pause(); return }
    setLoading(true)
    try { await audio.play() }
    catch { setPlaying(false); setError('No se ha podido iniciar la música. Toca para reintentarlo.') }
    finally { setLoading(false) }
  }

  return <div className="ae-music">
    <audio ref={audioRef} src={backgroundMusicUrl || undefined} loop preload="none" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setLoading(false); setError('La música no está disponible en este momento.') }} />
    {showHint && <p id="ae-music-hint" className="ae-music-hint">
      <span>reproducir música</span>
      <svg viewBox="0 0 40 32" fill="none" aria-hidden="true"><path d="M3 4c17-2 13 19 32 19m-7-6 7 6-8 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </p>}
    <button className={`ae-music-button${playing ? ' ae-music-playing' : ''}`} onClick={toggle} disabled={!backgroundMusicUrl || loading} aria-describedby={showHint ? 'ae-music-hint' : undefined} aria-pressed={playing} aria-busy={loading} aria-label={!backgroundMusicUrl ? 'Música disponible próximamente' : loading ? 'Cargando música' : playing ? 'Pausar música' : 'Reproducir música'} title={!backgroundMusicUrl ? 'Música disponible próximamente' : playing ? 'Pausar música' : 'Reproducir música'}>
      <svg className="ae-music-record" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="18.5" fill="#e8ecdf" stroke="currentColor" strokeWidth=".7" />
        <g stroke="currentColor" strokeWidth=".45" opacity=".45"><circle cx="20" cy="20" r="16" /><circle cx="20" cy="20" r="13.5" /><circle cx="20" cy="20" r="11.5" /></g>
        <circle cx="20" cy="20" r="9.5" fill="#fffdf8" stroke="currentColor" strokeWidth=".6" />
        <g transform="translate(5.6 5.6) scale(.72)">
        <g className="ae-music-note ae-music-note-one"><path d="M16 25V9l13-3v16M16 13l13-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /><ellipse cx="12.5" cy="26.5" rx="4" ry="2.7" transform="rotate(-20 12.5 26.5)" fill="currentColor" /></g>
        <g className="ae-music-note ae-music-note-two"><ellipse cx="25.5" cy="23.5" rx="4" ry="2.7" transform="rotate(-20 25.5 23.5)" fill="currentColor" /></g>
        <path className="ae-music-note ae-music-note-three" d="M32 31v-7m0 0 4 2m-4 5c0 1.2-1.1 2-2.4 2S27 32.4 27 31.5s1.1-1.8 2.4-1.8 2.6.4 2.6 1.3Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </button>
    <p className="ae-music-status" role="status">{error}</p>
  </div>
}
