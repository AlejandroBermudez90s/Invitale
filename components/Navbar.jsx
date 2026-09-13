import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-paper/95 backdrop-blur-sm transition-colors duration-300 dark:bg-night/95">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/brand/isotipo-claro.png" alt="InvitAle" width={707} height={715} className="block h-8 w-auto dark:hidden" />
          <Image src="/brand/isotipo-oscuro.png" alt="InvitAle" width={320} height={300} className="hidden h-8 w-auto dark:block" />
          <span className="font-display text-lg tracking-wide text-ink dark:text-cream">Invitale</span>
        </a>

        <div className="hidden items-center gap-8 font-body text-sm text-ink/80 dark:text-cream/80 sm:flex">
          <a href="#galeria" className="transition-colors hover:text-gold">Invitaciones</a>
          <a href="#sobre-mi" className="transition-colors hover:text-gold">Sobre mí</a>
          <a href="#contacto" className="transition-colors hover:text-gold">Contacto</a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          <a
            href="#contacto"
            className="rounded-sm border border-gold px-4 py-2 font-body text-xs tracking-wide text-gold transition-colors hover:bg-gold hover:text-paper dark:hover:text-night"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}