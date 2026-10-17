export default function EnvironmentalSketch({ motif = 'birds' }) {
  return <div className={`ae-environment ae-environment-${motif}`} aria-hidden="true">
    <svg viewBox="0 0 180 90" fill="none" stroke="#8b9b7b" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 65q20 7 35 0m78 0q18 7 35 0" stroke="#b9b698" strokeWidth=".7" />
      {motif === 'birds' && <><path d="M27 40c12-19 25-15 30-3 6-15 17-21 29-19-8 11-16 17-29 23L44 51l8-13m4-1 12 12-17-7M94 39c13-19 25-15 31-3 5-15 18-20 29-18-8 11-16 17-29 23l-14 10 8-13m5-2 13 13-18-7" /><path d="M76 50c6-6 8-8 14-3 7-5 12-3 12 2 0 6-12 12-12 12S78 55 78 50" stroke="#ba9382" /><path d="m68 49 10 1m24-1 10-1" stroke="#b9a88b" /></>}
      {motif === 'butterfly' && <><path d="M76 46C46 7 33 20 47 39c-18-2-17 24 8 19l21-12Zm0 0c7-45 28-39 24-16 16-10 29 12 6 22l-30-6Z" fill="#ead7c7" fillOpacity=".5" /><path d="m75 49 8-20m-1 6-5-10m7 8 8-8M107 69q8-27 26-37m-20 22 17 1m-10-12 3-13" /><path d="M133 32c-16 4-7 15 0 8 10 5 17-5 6-8 3-11-8-14-10-5Z" fill="#f2e2d5" stroke="#bf9d88" /></>}
      {motif === 'letter' && <><path d="m51 31 73-5 5 40-74 6-4-41Zm1 1 39 24 33-29m-69 43 23-24m50 19-26-19" fill="#eee3d2" fillOpacity=".4" /><path d="M91 49c-8-6-13 3 0 11 12-10 6-16 0-11Z" fill="#e5c6b5" stroke="#b8937f" /><path d="m133 44 14-4m-12 10 20 2m-22 4 12 5" stroke="#b9b698" /></>}
      {motif === 'ribbon' && <><path d="M83 43c-31-38-46-9-27 0 8 4 20 2 27 0Zm0 0c20-42 43-19 29-5-7 7-20 8-29 5Z" fill="#eddbcb" fillOpacity=".65" stroke="#bd9c85" /><path d="M80 43c-10 9-9 23-25 26l9-1 5 8c7-14 9-18 15-30m4-2c6 17 13 18 18 32l2-8 10 1c-13-11-16-17-27-24" stroke="#bd9c85" /><ellipse cx="85" cy="43" rx="6" ry="5" fill="#e6c6b5" stroke="#bd9c85" /></>}
      {motif === 'rings' && <><circle cx="75" cy="48" r="20" stroke="#ac9b70" /><circle cx="105" cy="48" r="20" stroke="#ac9b70" /><path d="m67 28 8-12 9 12m-15-7h13m-7-5v14m22-1 8-11 8 11" stroke="#b99580" /><path d="m47 23-5-5m90 6 5-6m-1 34 7 1M38 49l7-1" /></>}
      <g fill="#c6b690" stroke="none"><circle cx="27" cy="26" r="1.3" /><circle cx="149" cy="64" r="1.4" /><circle cx="156" cy="34" r=".9" /></g>
    </svg>
  </div>
}
