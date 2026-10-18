"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { invitations } from "@/data/invitations";
import Arrow from "./Arrow";

// Conserva la pareja inicial de la portada: Elena delante y Alejandro detrás.
const samples = invitations.filter(({ url }) => url !== "#");
const start = samples.findIndex(({ id }) => id === "elena-y-nicolas");
const deck = [...samples.slice(start), ...samples.slice(0, start)];

export default function HeroDeck() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState(0);
  const gesture = useRef(null);
  const suppressClickUntil = useRef(0);

  const move = (direction) => {
    setActive((index) => (index + direction + deck.length) % deck.length);
    setDrag(0);
  };

  const onPointerDown = (event) => {
    if (!event.isPrimary || event.button !== 0) return;
    suppressClickUntil.current = 0;
    gesture.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      locked: false,
      vertical: false,
    };
  };

  const onPointerMove = (event) => {
    const current = gesture.current;
    if (!current || current.id !== event.pointerId || current.vertical) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;

    // El desplazamiento vertical sigue perteneciendo a la página.
    if (!current.locked) {
      if (Math.abs(dy) > 10 && Math.abs(dy) >= Math.abs(dx)) {
        current.vertical = true;
        return;
      }
      if (Math.abs(dx) < 10 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
      current.locked = true;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    setDrag(Math.max(-140, Math.min(140, dx)));
  };

  const finishGesture = (event, cancelled = false) => {
    const current = gesture.current;
    if (!current || current.id !== event.pointerId) return;
    gesture.current = null;
    if (current.locked) {
      // Un arrastre nunca debe abrir accidentalmente una invitación.
      suppressClickUntil.current = performance.now() + 400;
      const dx = event.clientX - current.x;
      if (!cancelled && Math.abs(dx) >= 42) move(dx < 0 ? 1 : -1);
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    }
    setDrag(0);
  };

  return (
    <div className={`hero-showcase${drag !== 0 ? " is-dragging" : ""}`} role="region" aria-roledescription="carrusel" aria-label="Invitaciones destacadas">
      <div
        id="hero-deck"
        className="showcase-composition"
        tabIndex={0}
        aria-label="Baraja de invitaciones"
        aria-describedby="hero-deck-hint"
        style={{ "--deck-drag": `${drag}px`, "--deck-tilt": `${drag / 28}deg` }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(event) => finishGesture(event)}
        onPointerCancel={(event) => finishGesture(event, true)}
        onLostPointerCapture={(event) => finishGesture(event, true)}
        onDragStart={(event) => event.preventDefault()}
        onClickCapture={(event) => {
          if (performance.now() < suppressClickUntil.current) {
            event.preventDefault();
            event.stopPropagation();
            suppressClickUntil.current = 0;
          }
        }}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowRight" ? 1 : -1);
          }
          if (event.key === "Home" || event.key === "End") {
            event.preventDefault();
            setActive(event.key === "Home" ? 0 : deck.length - 1);
          }
        }}
      >
        {deck.map((invitation, index) => {
          const offset = (index - active + deck.length) % deck.length;
          const position = offset === 0 ? "front" : offset === deck.length - 1 ? "back" : offset === 1 ? "next" : "away";
          const visible = position === "front" || position === "back";
          return (
            <a
              key={invitation.id}
              className={`showcase-card showcase-card-${position}`}
              href={invitation.url}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={visible ? 0 : -1}
              aria-hidden={!visible}
              aria-label={`${invitation.title}, ${invitation.eventType}. Abrir invitación en otra pestaña`}
            >
              <Image
                src={invitation.coverImage}
                alt={`Invitación de ${invitation.title}`}
                width={600}
                height={750}
                priority={index === 0 || index === deck.length - 1}
                sizes="(min-width: 900px) 320px, 52vw"
                draggable={false}
              />
              <span className="showcase-open"><Arrow diagonal /></span>
            </a>
          );
        })}
      </div>
      <div className="showcase-navigation">
        <button type="button" className="showcase-control" aria-label="Ver la invitación anterior en la portada" aria-controls="hero-deck" onClick={() => move(-1)}><Arrow back /></button>
        <div className="showcase-current">
          <p aria-live="polite" aria-atomic="true">{deck[active].title}<span className="showcase-counter"><span className="sr-only">Invitación </span>{String(active + 1).padStart(2, "0")} / {String(deck.length).padStart(2, "0")}</span></p>
          <p id="hero-deck-hint">Desliza para descubrir<span className="sr-only">. También puedes usar los botones o las flechas del teclado al enfocar la baraja. Pulsa una tarjeta para abrirla.</span></p>
        </div>
        <button type="button" className="showcase-control" aria-label="Ver la invitación siguiente en la portada" aria-controls="hero-deck" onClick={() => move(1)}><Arrow /></button>
      </div>
    </div>
  );
}
