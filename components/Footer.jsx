import Arrow from "./Arrow";

export default function Footer() {
  return (
    <footer className="site-footer"><div className="section-shell footer-inner"><a href="#top" className="footer-brand">Invitale</a><p>Diseñado para recordar</p><span className="footer-copyright">© {new Date().getFullYear()} Invitale · Alejandro Bermúdez</span><a href="#top" className="back-top" aria-label="Volver al inicio"><Arrow down /></a></div></footer>
  );
}
