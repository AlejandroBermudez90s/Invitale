import Image from "next/image";

export default function InvitationCard({ invitation }) {
  const { title, eventType, date, coverImage, url } = invitation;
  const isPlaceholder = url === "#";

  const CardContent = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy/10 bg-cream dark:bg-cream/10">
        <Image
          src={coverImage}
          alt={`Invitación de ${title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Filete oro — separador de marca, no decoración genérica */}
      <div className="mt-4 h-px w-8 bg-gold" />

      <h3 className="mt-3 font-display text-xl text-ink dark:text-cream">{title}</h3>
      <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-cream/50">
        {eventType} · {date}
      </p>
    </>
  );

  if (isPlaceholder) {
    return (
      <div className="group cursor-default opacity-60">{CardContent}</div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      {CardContent}
    </a>
  );
}
