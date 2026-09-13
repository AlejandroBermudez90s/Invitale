export default function LinesMark({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-gold ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 22L10 14M7 22L15 14M12 22L20 14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}