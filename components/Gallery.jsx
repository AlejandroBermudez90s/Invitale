import { invitations } from "@/data/invitations";
import InvitationCard from "./InvitationCard";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-paper px-6 py-24 transition-colors duration-300 dark:bg-night sm:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="font-display text-3xl text-ink dark:text-cream sm:text-4xl">
            Invitaciones
          </h2>
          <p className="mt-3 max-w-prose font-body text-ink/60 dark:text-cream/60">
            Una selección de proyectos. Cada tarjeta abre la invitación publicada en una pestaña nueva.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {invitations.map((invitation, i) => (
            <Reveal key={invitation.id} delay={(i % 3) * 120}>
              <InvitationCard invitation={invitation} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}