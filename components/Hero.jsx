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
    <section id="top" className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 py-20 text-center transition-colors duration-300 dark:bg-night">
      <div className="animate-revealUp flex flex-col items-center">
        <Image src="/brand/imagotipo-claro.png" alt="InvitAle — Diseñado para recordar" width={950} height={1250} priority className="block h-auto w-48 dark:hidden sm:w-56" />
        <Image src="/brand/imagotipo-oscuro.png" alt="InvitAle — Diseñado para recordar" width={725} height={525} priority className="hidden h-auto w-56 dark:block sm:w-64" />

        <OrnateDivider className="mt-8" />

        <h1 className="mt-8 font-display text-2xl uppercase tracking-[0.2em] text-ink dark:text-cream sm:text-3xl">
          Invitaciones digitales
        </h1>
        <p className="mt-2 font-display text-base uppercase tracking-[0.25em] text-ink/70 dark:text-cream/70 sm:text-lg">
          Totalmente personalizadas
        </p>

        <LinesMark className="mt-8" />

        <div className="mt-8 flex flex-col gap-3 font-display text-ink/85 dark:text-cream/85 sm:flex-row sm:gap-10">
          {categorias.map((fila, i) => (
            <div key={i} className="flex items-center justify-center gap-3 sm:gap-6">
              {fila.map((item, j) => (
                <span key={item} className="flex items-center gap-3 sm:gap-6">
                  {item}
                  {j < fila.length - 1 && <span className="h-1 w-1 rounded-full bg-gold" />}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-10">
          {momentos.map((m) => (
            <span key={m} className="font-script text-2xl text-gold sm:text-3xl">{m}</span>
          ))}
        </div>

        <LinesMark className="mt-8" />

        <a href="#galeria" className="mt-10 font-body text-sm uppercase tracking-[0.2em] text-ink/60 transition-colors hover:text-gold dark:text-cream/70">
          Ver invitaciones
        </a>
      </div>
    </section>
  );
}