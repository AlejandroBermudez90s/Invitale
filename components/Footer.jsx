export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-navy px-6 py-8 text-center sm:px-10">
      <p className="font-body text-xs tracking-wide text-cream/50">
        © {year} InvitAle — Alejandro Bermúdez. Diseñado para recordar.
      </p>
    </footer>
  );
}
