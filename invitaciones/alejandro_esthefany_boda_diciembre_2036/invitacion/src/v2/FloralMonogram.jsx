function Blossom({ x, y, size = 1 }) {
  return <g transform={`translate(${x} ${y}) scale(${size})`}>
    {[0, 72, 144, 216, 288].map(angle => <ellipse key={angle} cx="0" cy="-6" rx="4.2" ry="7" transform={`rotate(${angle})`} fill="#f3e2d3" stroke="#bc937b" strokeWidth=".65" />)}
    <circle r="2.9" fill="#b69b68" /><circle r="1" fill="#f9f1dd" />
  </g>
}

export default function FloralMonogram() {
  return <div className="ae-footer-monogram" aria-hidden="true">
    <svg viewBox="0 0 240 240" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g className="ae-monogram-ring" stroke="#aa9874" strokeWidth=".8">
        <path d="M79 31a98 98 0 0 1 130 108M196 179A98 98 0 0 1 29 101" />
        <path d="M95 34a90 90 0 0 1 109 94M176 194A90 90 0 0 1 36 113" opacity=".45" />
      </g>
      <g className="ae-monogram-sprig" stroke="#6f8d73" strokeWidth="1">
        <path d="M29 132C19 86 40 42 85 27M211 109c12 48-11 93-58 108" />
        <path d="M31 107 16 91m17-1L25 68m16 6 1-23m10 10 7-24m136 99 21 18m-17 0 10 22m-19-3 1 25m-14-12-8 24" />
        <g fill="#a8bd9e" strokeWidth=".65">
          <path d="M27 100C8 100 8 88 11 82c11 2 18 8 16 18Z" />
          <path d="M30 83C13 73 15 62 21 58c9 8 12 15 9 25Z" />
          <path d="M40 65c-9-16-5-25 2-29 6 11 5 21-2 29Z" />
          <path d="M52 52c-3-17 3-24 11-25 1 11-3 20-11 25Z" />
          <path d="M33 87c17-4 24-13 22-21-12 1-21 9-22 21Z" />
          <path d="M29 111c15-7 20-16 15-24-10 5-17 13-15 24Z" />
          <path d="M209 140c18-1 23 9 21 16-12 0-20-5-21-16Z" />
          <path d="M204 160c19 7 19 18 13 24-10-6-15-14-13-24Z" />
          <path d="M195 180c11 15 8 25 1 30-8-9-8-19-1-30Z" />
          <path d="M181 196c6 16 1 24-7 27-4-11-1-21 7-27Z" />
          <path d="M202 158c-17 5-24 0-26-9 11-4 20-1 26 9Z" />
          <path d="M195 181c-17 1-24-6-22-15 11-1 19 5 22 15Z" />
        </g>
      </g>
      <Blossom x={65} y={38} size={.95} /><Blossom x={40} y={59} size={.6} />
      <Blossom x={177} y={205} size={.95} /><Blossom x={200} y={183} size={.6} />
      <g fill="#bfa979"><circle cx="79" cy="29" r="2.3" /><circle cx="29" cy="120" r="2" /><circle cx="158" cy="216" r="2.3" /><circle cx="211" cy="119" r="2" /></g>
      <text className="ae-monogram-initial ae-monogram-a" x="84" y="140" textAnchor="middle">A</text>
      <text className="ae-monogram-and" x="119" y="137" textAnchor="middle">&amp;</text>
      <text className="ae-monogram-initial ae-monogram-e" x="155" y="140" textAnchor="middle">E</text>
      <path d="M103 167h34" stroke="#b8a682" strokeWidth=".7" />
      <circle cx="120" cy="167" r="2.2" fill="#b8a682" />
    </svg>
  </div>
}
