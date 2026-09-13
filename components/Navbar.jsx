export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gold/20 bg-navy/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="font-display text-lg tracking-wide text-cream">
          InvitAle
        </a>

        <div className="hidden gap-8 font-body text-sm text-cream/80 sm:flex">
          <a href="#galeria" className="transition-colors hover:text-gold">
            Invitaciones
          </a>
          <a href="#sobre-mi" className="transition-colors hover:text-gold">
            Sobre mí
          </a>
          <a href="#contacto" className="transition-colors hover:text-gold">
            Contacto
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-sm border border-gold px-4 py-2 font-body text-xs tracking-wide text-gold transition-colors hover:bg-gold hover:text-navy sm:hidden"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}
