import rex from '../assets/rex.png'
import aliens from '../assets/aliens.png'
import jessie from '../assets/jessie.png'
import hamm from '../assets/hamm.png'
import slinky from '../assets/slinky.png'
import ball from './assets/pelota-bloques.webp'
import western from './assets/sombrero-panuelo.webp'

export function ToyStar({ className = '' }) {
  return <svg className={`jo-toy-star ${className}`} viewBox="0 0 80 80" aria-hidden="true"><path d="m40 4 11 23 25 4-18 18 4 26-22-12-22 12 4-26L4 31l25-4Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" /></svg>
}

function Planet() {
  return <svg className="jo-toy-planet" viewBox="0 0 140 100" aria-hidden="true"><circle cx="70" cy="50" r="32" fill="#a7b65f" /><path d="M48 26c-9 8-13 27-8 39 4 9 12 13 20 14" fill="none" stroke="#c9d28e" strokeWidth="6" opacity=".7" /><ellipse cx="70" cy="51" rx="63" ry="17" transform="rotate(-24 70 51)" fill="none" stroke="#cb9562" strokeWidth="10" /><path d="m54 40 8-8m14 29 7-6" stroke="#839447" strokeWidth="5" strokeLinecap="round" /></svg>
}

const scenes = {
  intro: [['rex', rex], ['ball', ball]],
  places: [['jessie', jessie], ['western', western]],
  plan: [['slinky', slinky]],
  countdown: [['aliens', aliens]],
  rsvp: [['hamm', hamm], ['ball', ball]],
  gift: [['western', western], ['aliens', aliens]],
}

export default function ToyDecorations({ scene }) {
  return <div className={`jo-decor jo-decor-${scene}`} aria-hidden="true">
    {(scenes[scene] || []).map(([kind, src]) => <img key={kind} className={`jo-decor-${kind}`} src={src} alt="" loading="lazy" decoding="async" />)}
    <ToyStar className="jo-decor-star-one" /><ToyStar className="jo-decor-star-two" />
    {(scene === 'countdown' || scene === 'intro') && <Planet />}
    {scene === 'places' && <div className="jo-bunting"><i /><i /><i /><i /><i /><i /><i /></div>}
    {scene === 'plan' && <div className="jo-toy-path" />}
  </div>
}
