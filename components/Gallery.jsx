"use client";

import { useEffect, useRef, useState } from "react";
import { invitations } from "@/data/invitations";
import InvitationCard from "./InvitationCard";
import Arrow from "./Arrow";

const collection = invitations.filter(({ url }) => url !== "#");
const formatNumber = (number) => String(number).padStart(2, "0");

export default function Gallery() {
  const trackRef = useRef(null);
  const [position, setPosition] = useState({ index: 0, last: 0, atStart: true, atEnd: false });

  useEffect(() => {
    const track = trackRef.current;
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const slides = [...track.children];
        const start = slides[0].offsetLeft;
        const distance = (slide) => Math.abs(slide.offsetLeft - start - track.scrollLeft);
        const nearest = slides.reduce((best, slide, index) => distance(slide) < distance(slides[best]) ? index : best, 0);
        const last = slides.reduce((visible, slide, index) => slide.offsetLeft - start + slide.offsetWidth <= track.scrollLeft + track.clientWidth + 3 ? index : visible, nearest);
        setPosition({ index: nearest, last, atStart: track.scrollLeft < 3, atEnd: track.scrollWidth - track.clientWidth - track.scrollLeft < 3 });
      });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(update);
    resize.observe(track);
    return () => { track.removeEventListener("scroll", update); resize.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  const move = (direction) => {
    const track = trackRef.current;
    const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
    track.scrollBy({ left: direction * step, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };

  return (
    <section id="galeria" className="gallery-section" aria-labelledby="gallery-title">
      <div className="section-shell">
        <div className="section-heading gallery-heading">
          <div><p className="eyebrow">La colección</p><h2 id="gallery-title">Cada celebración,<br /><em>su propia esencia.</em></h2></div>
          <p>Entra, explora y déjate inspirar.<br />Así empieza una invitación hecha para ti.</p>
        </div>
        <div className="carousel" role="region" aria-roledescription="carrusel" aria-label="Muestras de invitaciones">
          <div id="invitation-carousel" ref={trackRef} className="carousel-track" tabIndex={0} aria-label="Invitaciones, desliza o usa las flechas del teclado" onKeyDown={(event) => {
            if (event.target !== event.currentTarget) return;
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
            if (event.key === "Home" || event.key === "End") { event.preventDefault(); event.currentTarget.scrollTo({ left: event.key === "Home" ? 0 : event.currentTarget.scrollWidth, behavior: "instant" }); }
          }}>
            {collection.map((invitation, index) => <div className="carousel-slide" role="group" aria-roledescription="diapositiva" aria-label={`${index + 1} de ${collection.length}`} key={invitation.id}><InvitationCard invitation={invitation} index={index} /></div>)}
          </div>
          <div className="carousel-footer">
            <p className="gallery-note">Diseños para sentir. Invitaciones para explorar.<span>Cada muestra se abre en una nueva pestaña.</span></p>
            <div className="carousel-controls">
              <span className="carousel-count" aria-live="polite" aria-atomic="true"><span><span className="sr-only">Mostrando invitaciones </span>{formatNumber(position.index + 1)}{position.last > position.index && `–${formatNumber(position.last + 1)}`}</span><span className="count-separator" /><span className="sr-only"> de </span>{formatNumber(collection.length)}</span>
              <button className="icon-button" type="button" aria-label="Invitación anterior" aria-controls="invitation-carousel" disabled={position.atStart} onClick={() => move(-1)}><Arrow back /></button>
              <button className="icon-button" type="button" aria-label="Invitación siguiente" aria-controls="invitation-carousel" disabled={position.atEnd} onClick={() => move(1)}><Arrow /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
