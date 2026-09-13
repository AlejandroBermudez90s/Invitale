export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-navy via-navy to-navy-deep px-6 text-center"
    >
      <div className="animate-revealUp flex flex-col items-center">
        {/* Trazo oro — evoca el lazo/corazón del imagotipo, sin repetirlo literalmente */}
        <svg
          width="64"
          height="40"
          viewBox="0 0 64 40"
          fill="none"
          className="mb-8"
          aria-hidden="true"
        >
          <path
            d="M4 20c8-16 20-16 28 0s20 16 28 0"
            stroke="#c9a300"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="font-display text-5xl text-cream sm:text-6xl">
          InvitAle
        </h1>

        <p className="mt-4 font-body text-sm uppercase tracking-[0.25em] text-gold">
          Diseñado para recordar
        </p>

        <p className="mt-8 max-w-prose font-body text-base leading-relaxed text-cream/75 sm:text-lg">
          Invitaciones digitales a medida para bodas, quinceañeras, bautizos,
          comuniones, cumpleaños y eventos corporativos.
        </p>

        <a
          href="#galeria"
          className="group mt-12 inline-flex items-center gap-2 font-body text-sm text-cream/90 transition-colors hover:text-gold"
        >
          Ver invitaciones
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform group-hover:translate-y-1"
            aria-hidden="true"
          >
            <path
              d="M2 5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
