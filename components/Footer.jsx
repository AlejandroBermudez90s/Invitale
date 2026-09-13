export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/15 bg-night px-6 py-10 text-center sm:px-10">
      <p className="font-script text-3xl text-gold">Diseñado para recordar</p>
      <p className="mt-3 font-body text-xs tracking-wide text-cream/50">
        Alejandro Bermúdez · © {year} InvitAle
      </p>
    </footer>
  );
}