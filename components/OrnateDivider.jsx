/**
 * Línea divisoria simple, sin adornos en los extremos.
 * Usa currentColor: hereda el color de texto del contenedor.
 */
export default function OrnateDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 16"
      className={`h-4 w-full max-w-md text-gold ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="8" x2="600" y2="8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}