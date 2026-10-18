"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { invitations } from "@/data/invitations";
import Arrow from "./Arrow";

const samples = invitations.filter(({ url }) => url !== "#");
const deck = samples;
const initialPosition = Math.max(0, deck.findIndex(({ id }) => id === "elena-y-nicolas"));
// La carta de entrada conserva la pareja inicial sin duplicar pasos del carrusel.
const cards = [deck[deck.length - 1], ...deck];
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

export default function HeroDeck() {
  const railRef = useRef(null);
  const stepRef = useRef(0);
  const positionRef = useRef(initialPosition);
  const gestureRef = useRef(null);
  const suppressClickUntil = useRef(0);
  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const active = Math.round(position);

  useEffect(() => {
    const rail = railRef.current;
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = clamp(rail.scrollLeft / (stepRef.current || 1), 0, deck.length - 1);
        positionRef.current = next;
        setPosition(next);
      });
    };
    const measure = () => {
      const step = rail.querySelector(".showcase-slot").getBoundingClientRect().width;
      if (!stepRef.current || Math.abs(step - stepRef.current) > .5) {
        rail.scrollTo({ left: Math.round(positionRef.current) * step, behavior: "instant" });
      }
      stepRef.current = step;
      update();
    };
    measure();
    rail.addEventListener("scroll", update, { passive: true });
    const resize = new ResizeObserver(measure);
    resize.observe(rail);
    return () => {
      rail.removeEventListener("scroll", update);
      resize.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  const goTo = (index) => {
    railRef.current.scrollTo({
      left: clamp(index, 0, deck.length - 1) * stepRef.current,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  const onPointerDown = (event) => {
    suppressClickUntil.current = 0;
    // En pantallas táctiles, el navegador gestiona el desplazamiento y la inercia.
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    gestureRef.current = {
      id: event.pointerId,
      x: event.clientX,
      scroll: event.currentTarget.scrollLeft,
      locked: false,
    };
  };

  const onPointerMove = (event) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    const dx = event.clientX - gesture.x;
    if (!gesture.locked) {
      if (Math.abs(dx) < 5) return;
      gesture.locked = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      event.currentTarget.style.scrollSnapType = "none";
      setDragging(true);
    }
    event.currentTarget.scrollLeft = gesture.scroll - dx;
  };

  const finishMouseDrag = (event) => {
    const gesture = gestureRef.current;
    if (!gesture || gesture.id !== event.pointerId) return;
    gestureRef.current = null;
    if (!gesture.locked) return;
    suppressClickUntil.current = performance.now() + 400;
    const rail = event.currentTarget;
    const nearest = Math.round(rail.scrollLeft / stepRef.current);
    rail.style.scrollSnapType = "";
    setDragging(false);
    goTo(nearest);
    if (rail.hasPointerCapture(event.pointerId)) rail.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="hero-showcase" role="region" aria-roledescription="carrusel" aria-label="Invitaciones destacadas">
      <div className="showcase-composition">
        <div
          id="hero-deck"
          ref={railRef}
          className={`showcase-rail${dragging ? " is-dragging" : ""}`}
          tabIndex={0}
          aria-label="Baraja de invitaciones"
          aria-describedby="hero-deck-hint"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={finishMouseDrag}
          onPointerCancel={finishMouseDrag}
          onLostPointerCapture={finishMouseDrag}
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
              goTo(active + (event.key === "ArrowRight" ? 1 : -1));
            }
            if (event.key === "Home" || event.key === "End") {
              event.preventDefault();
              goTo(event.key === "Home" ? 0 : deck.length - 1);
            }
          }}
        >
          {cards.map((invitation, index) => {
            const offset = index - 1 - position;
            const rear = clamp(-offset, 0, 1);
            const opacity = clamp(Math.min(2 + offset, 1 - offset), 0, 1);
            const visible = index === active || index === active + 1;
            const front = index === active + 1;
            return (
              <div className="showcase-slot" key={`${invitation.id}-${index}`}>
                <a
                  className={`showcase-card${front ? " showcase-card-front" : ""}`}
                  href={invitation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  draggable={false}
                  tabIndex={visible ? 0 : -1}
                  aria-hidden={!visible}
                  aria-label={`${invitation.title}, ${invitation.eventType}. Abrir invitación en otra pestaña`}
                  style={{
                    top: `${12 - rear * 6}%`,
                    opacity,
                    zIndex: front ? 3 : 2,
                    pointerEvents: visible ? "auto" : "none",
                    "--card-angle": `${clamp(6 + offset * 15, -16, 15)}deg`,
                    "--card-scale": 1 - rear * .085,
                  }}
                >
                  <Image
                    src={invitation.coverImage}
                    alt={`Invitación de ${invitation.title}`}
                    width={600}
                    height={750}
                    priority={index === initialPosition || index === initialPosition + 1}
                    loading={index === initialPosition || index === initialPosition + 1 ? undefined : "eager"}
                    sizes="(min-width: 900px) 320px, 52vw"
                    draggable={false}
                  />
                  <span className="showcase-open"><Arrow diagonal /></span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="showcase-navigation">
        <button type="button" className="showcase-control" disabled={active === 0} aria-label="Ver la invitación anterior en la portada" aria-controls="hero-deck" onClick={() => goTo(active - 1)}><Arrow back /></button>
        <div className="showcase-current">
          <p aria-live="polite" aria-atomic="true">{deck[active].title}<span className="showcase-counter"><span className="sr-only">Invitación </span>{String(active + 1).padStart(2, "0")} / {String(deck.length).padStart(2, "0")}</span></p>
          <p id="hero-deck-hint">Desliza las tarjetas hacia los lados<span className="sr-only">. También puedes usar los botones o las flechas del teclado al enfocar la baraja. Pulsa una tarjeta para abrirla.</span></p>
        </div>
        <button type="button" className="showcase-control" disabled={active === deck.length - 1} aria-label="Ver la invitación siguiente en la portada" aria-controls="hero-deck" onClick={() => goTo(active + 1)}><Arrow /></button>
      </div>
    </div>
  );
}
