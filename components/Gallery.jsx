import { invitations } from "@/data/invitations";
import InvitationCard from "./InvitationCard";

export default function Gallery() {
  return (
    <section id="galeria" className="bg-cream px-6 pb-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Invitaciones
        </h2>
        <p className="mt-3 max-w-prose font-body text-ink/60">
          Una selección de proyectos. Cada tarjeta abre la invitación
          publicada en una pestaña nueva.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {invitations.map((invitation) => (
            <InvitationCard key={invitation.id} invitation={invitation} />
          ))}
        </div>
      </div>
    </section>
  );
}
