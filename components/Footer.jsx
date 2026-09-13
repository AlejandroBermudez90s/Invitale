export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gold/15 bg-paper px-6 py-10 text-center transition-colors duration-300 dark:bg-night sm:px-10">
      <p className="font-script text-3xl text-ink dark:text-cream">Diseñado para recordar</p>
      <p className="mt-3 font-body text-xs tracking-wide text-ink/50 dark:text-cream/50">
        Alejandro Bermúdez · © {year} InvitAle
      </p>
    </footer>
  );
}