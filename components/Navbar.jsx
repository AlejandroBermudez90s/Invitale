"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Arrow from "./Arrow";

const links = [{ href: "#galeria", label: "Invitaciones" }, { href: "#sobre-mi", label: "El estudio" }, { href: "#proceso", label: "Cómo trabajamos" }];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  return (
    <header className="site-header">
      <nav className="nav-shell section-shell" aria-label="Navegación principal">
        <a href="#top" className="brand" aria-label="Invitale, inicio" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/isotipo-claro.png" alt="" width={707} height={715} className="brand-symbol brand-light" />
          <Image src="/brand/isotipo-oscuro.png" alt="" width={320} height={300} className="brand-symbol brand-dark" />
          <span>Invitale</span>
        </a>
        <div className="nav-links">{links.map(({ href, label }) => <a href={href} key={href}>{label}</a>)}</div>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contacto" className="button nav-contact" onClick={() => setMenuOpen(false)}>Hablemos <Arrow diagonal /></a>
          <button ref={menuButtonRef} type="button" className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "menu-lines is-open" : "menu-lines"}><span /><span /></span>
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className="mobile-navigation" hidden={!menuOpen} onKeyDown={(event) => { if (event.key === "Escape") { setMenuOpen(false); menuButtonRef.current?.focus(); } }}>
        {links.map(({ href, label }) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<Arrow diagonal /></a>)}
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto<Arrow diagonal /></a>
      </div>
    </header>
  );
}
