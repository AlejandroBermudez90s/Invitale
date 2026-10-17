// Dibujos de arquitectura en la misma paleta, a partir de referencias de cada lugar.
export default function VenueSketch({ kind }) {
  const church = kind === 'church'
  return <svg className="ae-venue-sketch" viewBox="0 0 360 240" fill="none" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label={church ? 'Dibujo de la iglesia de La Majada, en Mazarrón, Murcia: fachada blanca y espadaña' : 'Dibujo del Alcázar de Segovia: torreones, tejados de pizarra y torre de Juan II'}>
    <ellipse cx="180" cy="208" rx="145" ry="14" fill="#c6d1b5" opacity=".22" />
    {church ? <g stroke="#947d65" strokeWidth="1.3">
      <path d="M245 94v-9l18-14 27 12 11 13v46" fill="#f7edda" />
      <path d="m245 85 18-16 27 12 11 15-27-8Z" fill="#d9b08b" />
      <path d="m256 78 19 10m-9-16 19 19m-7-16 16 18M272 68v-8m-3 3h6" />
      <path d="m283 111 45 20 1 77-46-6" fill="#f1eadc" />
      <path d="m285 108 47 22-7 5-42-17" fill="#d8ad8a" />
      <path d="M43 143 168 84q13-4 14-19V35q10 0 15-6 6-5 14 1l15 5v31q2 13 15 17l40 16 7 101-245-15Z" fill="#fffaf0" />
      <path d="M43 143 168 84q13-4 14-19V35q10 0 15-6 6-5 14 1l15 5m0 31q2 13 15 17l40 16" stroke="#ac7868" strokeWidth="2.4" />
      <path d="M43 169 288 186v14L43 185Z" fill="#b5756b" opacity=".6" stroke="none" />
      <path d="M191 63V48a10 10 0 0 1 20 0v16Z" fill="#e4dfce" />
      <path d="M198 48v10m-4 3h13l-3-4h-7Zm7 3v3" fill="#b7a080" />
      <path d="M199 186v-42a15 15 0 0 1 30 0v45Z" fill="#bd9b80" />
      <path d="M205 140v45m6-50v51m6-51v52m6-46v47" stroke="#977762" strokeWidth=".7" />
      <path d="M109 148v-25l13-5v30Z" fill="#bfa28d" />
      <path d="m105 149 23-1v9l-23 3Zm4 1v9m5-9v8m5-9v8m5-9v8" stroke="#9f9f8e" />
      <path d="M58 167v-14l11-4v18Zm92 8v-14l8-1v16m144 9v-25l15 4v24Z" fill="#c6c8b5" />
      <path d="m301 164 10 17m-11-9 11-5m-6-1v18" strokeWidth=".6" />
      <path d="M212 111v-8m-4 0h8l-2 7h-4Zm0-8 4-5 4 5m-4 7v4m-6 0h12" stroke="#8a8d78" strokeWidth=".8" />
      <path d="M36 185v23l256 15 35-14v-24M36 187l256 12 35-14M37 207l255 14" stroke="#9ba28b" />
      {Array.from({ length: 30 }, (_, i) => <path key={i} d={`M${42+i*8.3} ${187+i*.39}v20`} strokeWidth=".65" />)}
      <path d="m90 190 2 20m88-15 1 21m77-18 1 21" stroke="#f6f1e7" strokeWidth="6" />
      <path d="M181 198h5v21h-5M88 192h5v20h-5" strokeWidth=".8" fill="#fffaf0" />
      <path d="m24 211 78 4m166 13 65-9" stroke="#b2b69a" />
    </g> : <g stroke="#8f826b" strokeWidth="1.2">
      <path d="m33 215 23-31 49-8 44-12 57 4 47-1 44 21 27 25" fill="#ddd7bf" opacity=".55" />
      <path d="m48 201 30-10 20 6 29-15 35 9 32-10 28 10 24-8 26 18m-211 9 25-2m42-4 25-5m48 7 30-5" stroke="#b8b49a" strokeWidth=".8" />
      <path d="M99 170V94l17-12 22 5 9 80" fill="#eee0c6" />
      <path d="m95 94 21-46 25 46Z" fill="#a7b4ad" />
      <path d="M118 47v-9m-3 4h6" strokeWidth=".8" />
      <path d="M137 171V99l21-10 92 24 37 57Z" fill="#f0e3c9" />
      <path d="m136 101 22-21 91 22 36 20-37-9-90-24Z" fill="#b5bdb0" />
      <path d="M231 107V67h8V57h8v11h9V56h8v12h10V55h8v11h9v49" fill="#eee0c6" />
      <path d="M235 76h53m-47-9v9m14-10v10m15-10v10m14-11v11" />
      <path d="M286 162v-30l11-8 9 6v37" fill="#eadabd" />
      <path d="m283 132 14-29 12 29Z" fill="#a7b4ad" />
      <path d="M146 169V87l12-5 13 7v86" fill="#eadbbf" />
      <path d="m142 87 16-35 17 37Z" fill="#acb8ae" />
      <path d="M105 164V83c5-5 16-5 22 0v82" fill="#f2e5ce" />
      <path d="m101 83 14-58 15 58Z" fill="#a2afa9" />
      <path d="M115 25v-9m-3 3h6" />
      <path d="M72 181v-45l7-4 8 3v46" fill="#eadabd" />
      <path d="m69 136 10-26 11 27Z" fill="#acb8ae" />
      <path d="M75 170h8v-6h7v6h8v-6h7v6h8v-6h7v6h8v-6h7v6h8v-6h7v6h8v-6h7v6h8v-6h7v6l98 10v18L74 187Z" fill="#eee0c6" />
      <path d="M173 197v-51l10-6 12 8v52" fill="#d6c4a6" />
      <path d="m170 146 13-35 15 38Z" fill="#a7b4ad" />
      {[108,119,151,161,239,252,265,278].map((x,i)=><path key={x} d={`M${x} ${i<4?105:83}v6m0 8v6`} strokeWidth="1.1" />)}
      {[179,193,208,222,237,251,266].map((x,i)=><path key={x} d={`M${x} ${119+i*2}v7m0 8v7`} strokeWidth=".8" />)}
      <path d="M79 181v-7m28 9v-7m27 9v-7m76 13v-10m12 12v-9m12 10v-8m12 10v-8m12 9v-7" strokeWidth=".7" />
      <path d="m104 91 22 1m21 5 23 1m-21 62 21 2m64-72 54 1" stroke="#b6a991" strokeWidth=".6" />
      <path d="m28 215 76 6 70-4 66 4 88-9" stroke="#b2b69a" />
    </g>}
    <g stroke="#8da081" strokeWidth="1" opacity=".8"><path d="M24 211c5-16 2-28 10-39m-5 20-9-7m8 13 9-6M333 213c-3-10-2-17-9-25m6 13 8-6" /><path d="M17 183c8-1 11 3 11 9-7 0-10-4-11-9Zm18 9c7-1 8-4 9-9-7 1-10 4-9 9Z" fill="#bfd0b4" stroke="none" /></g>
  </svg>
}
