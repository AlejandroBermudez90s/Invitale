export default function Arrow({ diagonal = false, down = false, back = false }) {
  return (
    <svg className={`arrow-icon${diagonal ? " arrow-diagonal" : ""}${down ? " arrow-down" : ""}${back ? " arrow-back" : ""}`} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
