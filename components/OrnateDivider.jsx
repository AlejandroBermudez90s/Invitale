export default function OrnateDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 16"
      className={`h-4 w-full max-w-md text-gold ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="600" y2="8" stroke="currentColor" strokeWidth="1" />
      {[40, 56, 72].map((x, i) => (
        <rect
          key={`l-${x}`}
          x={x}
          y={8 - (3 - i)}
          width={(3 - i) * 2}
          height={(3 - i) * 2}
          transform={`rotate(45 ${x} 8)`}
          fill="currentColor"
        />
      ))}
      {[560, 544, 528].map((x, i) => (
        <rect
          key={`r-${x}`}
          x={x}
          y={8 - (3 - i)}
          width={(3 - i) * 2}
          height={(3 - i) * 2}
          transform={`rotate(45 ${x} 8)`}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}