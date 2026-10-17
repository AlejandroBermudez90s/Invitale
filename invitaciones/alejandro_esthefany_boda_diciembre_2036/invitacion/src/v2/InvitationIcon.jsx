export default function InvitationIcon({ name, className = '' }) {
  const drawings = {
    bouquet: <><path d="m18 30 6 12 6-12M24 28v14M16 36h16" /><circle cx="17" cy="21" r="6" /><circle cx="30" cy="22" r="6" /><circle cx="24" cy="13" r="7" /><path d="m12 27 7 5m17-5-7 5" /></>,
    chapel: <><path d="M8 42h32M14 42V23l10-8 10 8v19M20 42V31a4 4 0 0 1 8 0v11M24 15V5m-4 4h8M11 23h26" /><circle cx="24" cy="24" r="2" /></>,
    glasses: <><path d="m9 10 13 2-2 12a7 7 0 0 1-13-2l2-12Zm24 0-9 4 4 11a7 7 0 0 0 13-5l-8-10ZM13 29l-2 12m-5 0h11m17-12 4 12m-5 2 10-3M8 18l13 2m6 0 11-4" /></>,
    dinner: <><circle cx="25" cy="25" r="12" /><circle cx="25" cy="25" r="8" /><path d="M5 8v11m4-11v11M5 15h4m-2 4v22M43 8c-4 5-4 12 0 15v18M43 8v15" /></>,
    rings: <><circle cx="18" cy="28" r="11" /><circle cx="31" cy="28" r="11" /><path d="m12 15 6-9 6 9m-11-4h10m-5-5v10m9-5 4-5 5 7" /></>,
    party: <><path d="m10 39 7-24 17 17-24 7Zm5-12 9 9m-7-17 14 14M28 9c-5-7 9-6 3-1s-2 10 4 6M38 9l4-4M38 21l7-1M23 5l-2 5M35 36l4 4M7 20l-3-2" /><circle cx="40" cy="30" r="1.5" /></>,
    pencil: <><path d="m10 32-2 9 9-2L39 17l-7-7-22 22Zm20-20 7 7M10 32l7 7M32 10l3-3a4 4 0 0 1 6 6l-2 4" /></>,
  }
  return <svg className={`ae-invitation-icon ${className}`} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name] || drawings.bouquet}</svg>
}
