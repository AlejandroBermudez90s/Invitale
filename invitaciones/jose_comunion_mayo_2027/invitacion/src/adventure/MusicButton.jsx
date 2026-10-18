import { useEffect, useRef, useState } from 'react'

// El archivo aportado por el cliente se conecta al compilar, sin peticiones a un audio ausente.
const tracks = import.meta.glob('./assets/hay-un-amigo-en-mi.{mp3,m4a,ogg,wav}', {
  eager: true, query: '?url', import: 'default',
})
const musicUrl = Object.values(tracks)[0]

export default function MusicButton() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [hint, setHint] = useState(Boolean(musicUrl))

  useEffect(() => {
    const audio = audioRef.current
    audio.volume = .3
    const pause = () => audio.pause()
    window.addEventListener('pagehide', pause)
    return () => { audio.pause(); window.removeEventListener('pagehide', pause) }
  }, [])

  async function toggle() {
    setHint(false)
    setError('')
    if (!musicUrl) return
    const audio = audioRef.current
    if (!audio.paused) { audio.pause(); return }
    setLoading(true)
    try { await audio.play() }
    catch { setError('No se ha podido iniciar la música. Toca para reintentarlo.'); setPlaying(false) }
    finally { setLoading(false) }
  }

  const label = !musicUrl ? 'Música disponible próximamente' : loading ? 'Cargando música' : playing ? 'Pausar música' : 'Reproducir música: Hay un amigo en mí'
  return <div className="jo-music">
    <audio ref={audioRef} src={musicUrl || undefined} loop preload="none" onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => { setError('La música no está disponible en este momento.'); setPlaying(false); setLoading(false) }} />
    {hint && <p id="jo-music-hint" className="jo-music-hint"><span>un poco de música</span><svg viewBox="0 0 40 32" fill="none" aria-hidden="true"><path d="M3 4c17-2 13 19 32 19m-7-6 7 6-8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg></p>}
    <button className={`jo-music-button${playing ? ' jo-music-playing' : ''}`} disabled={!musicUrl || loading} onClick={toggle} aria-label={label} aria-pressed={playing} aria-busy={loading} aria-describedby={hint ? 'jo-music-hint' : undefined} title={label}>
      <svg className="jo-music-record" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="18.5" fill="#f6dc92" stroke="currentColor" strokeWidth=".7" />
        <g stroke="currentColor" strokeWidth=".45" opacity=".4"><circle cx="20" cy="20" r="16" /><circle cx="20" cy="20" r="13.5" /><circle cx="20" cy="20" r="11.5" /></g>
        <circle cx="20" cy="20" r="9.5" fill="#fff9ed" stroke="currentColor" strokeWidth=".6" />
        <path d="M16 25V12l11-3v13M16 15l11-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="13" cy="26" rx="3.5" ry="2.4" transform="rotate(-20 13 26)" fill="currentColor" />
        <ellipse cx="24" cy="23" rx="3.5" ry="2.4" transform="rotate(-20 24 23)" fill="currentColor" />
      </svg>
    </button>
    <p className="jo-music-status" role="status">{error}</p>
  </div>
}
