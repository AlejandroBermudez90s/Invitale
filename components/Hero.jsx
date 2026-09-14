import Image from "next/image";
import OrnateDivider from "./OrnateDivider";
import LinesMark from "./LinesMark";

const categorias = [
  ["Bodas", "Bautizos", "Eventos"],
  ["Comuniones", "Cumpleaños", "Quinceañeras"],
];

const momentos = ["Tu momento", "Tu recuerdo", "Tu historia"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-paper px-6 py-24 text-center transition-colors duration-300 dark:bg-night"
    >
      <div
        aria-hidden="true"
        className="hero-glow pointer-events-none absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-gold/25 blur-[90px] dark:bg-gold/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(37,37,39,0.06)_100%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]"
      />

      <div className="relative flex flex-col items-center">
        <div className="hero-logo-float">
          <Image
            src="/brand/imagotipo-claro.png"
            alt="InvitAle — Diseñado para recordar"
            width={950}
            height={1250}
            priority
            className="block h-auto w-48 drop-shadow-[0_8px_30px_rgba(201,163,0,0.15)] dark:hidden sm:w-56"
          />
          <Image
            src="/brand/imagotipo-oscuro.png"
            alt="InvitAle — Diseñado para recordar"
            width={725}
            height={525}
            priority
            className="hidden h-auto w-56 drop-shadow-[0_8px_30px_rgba(201,163,0,0.25)] dark:block sm:w-64"
          />
        </div>

        <div className="hero-divider-grow mt-8">
          <OrnateDivider />
        </div>

        <h1 className="stagger-1 animate-revealUp mt-8 font-display text-2xl uppercase tracking-[0.2em] text-ink dark:text-cream sm:text-3xl">
          Invitaciones digitales
        </h1>
        <p className="stagger-2 animate-revealUp mt-2 font-display text-base uppercase tracking-[0.25em] text-ink/70 dark:text-cream/70 sm:text-lg">
          Totalmente personalizadas
        </p>

        <div className="stagger-3 animate-revealUp mt-8">
          <LinesMark />
        </div>

        <div className="stagger-4 animate-revealUp mt-8 flex flex-col gap-3 font-display text-ink/85 dark:text-cream/85 sm:flex-row sm:gap-10">
          {categorias.map((fila, i) => (
            <div key={i} className="flex items-center justify-center gap-3 sm:gap-6">
              {fila.map((item, j) => (
                <span key={item} className="flex items-center gap-3 sm:gap-6">
                  <span className="group relative">
                    {item}
                    <span className="absolute -bottom-1 left-0 h-px w-full origin-center scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  </span>
                  {j < fila.length - 1 && (
                    <span className="h-1 w-1 rounded-full bg-gold" />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="stagger-5 animate-revealUp mt-6 flex flex-col gap-2 sm:flex-row sm:gap-10">
          {momentos.map((m) => (
            <span
              key={m}
              className="font-script text-2xl text-gold transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(201,163,0,0.5)] sm:text-3xl"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="stagger-6 animate-revealUp mt-8">
          <LinesMark />
        </div>

        <a
          href="#galeria"
          className="stagger-7 animate-revealUp group mt-10 inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-2.5 font-body text-sm uppercase tracking-[0.2em] text-ink/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-night dark:text-cream/80"
        >
          Ver invitaciones
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="animate-bounce transition-transform" aria-hidden="true">
            <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  );
}