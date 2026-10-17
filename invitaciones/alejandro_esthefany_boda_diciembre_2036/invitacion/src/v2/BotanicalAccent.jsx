export default function BotanicalAccent({ side = 'left', birds = false }) {
  return <div className={`ae-botanical-accent ae-accent-${side}`} aria-hidden="true">
    <svg viewBox="0 0 120 220" fill="none">
      <path d="M38 208C64 157 28 101 89 13" stroke="#739984" strokeWidth="1.3" />
      {[[49,174,-40],[48,147,35],[51,119,-25],[57,91,40],[70,61,-25],[83,32,35]].map(([x,y,rotation],i)=><ellipse key={i} cx={x} cy={y} rx="8" ry="20" fill={i%2?'#b3cab8':'#84a88d'} transform={`rotate(${rotation} ${x} ${y})`} />)}
      <path d="M43 165C22 140 29 124 17 106m35 13c26-5 35-21 39-39" stroke="#b89470" strokeWidth="1" />
      <circle cx="17" cy="104" r="5" fill="#dfaf98" /><circle cx="91" cy="79" r="4" fill="#e7c6b5" />
    </svg>
    {birds && <svg className="ae-little-birds" viewBox="0 0 100 70" fill="none" stroke="#688c7b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <g className="ae-bird-one"><path d="M13 38c13-17 22-12 28-2 5-14 17-20 27-18-7 9-13 16-26 21l-8 6m7-9 10 8-14-3M66 18l5-2" /></g>
      <g className="ae-bird-two"><path d="M53 56c8-10 14-8 18-1 4-9 11-13 18-12-4 6-8 10-17 14l-5 3m4-5 6 5-8-2" /></g>
    </svg>}
  </div>
}
