import Image from "next/image";
import Arrow from "./Arrow";

export default function InvitationCard({ invitation, index }) {
  const { title, eventType, coverImage, url, description } = invitation;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="invitation-card" aria-label={`${title}, ${eventType}. Abrir invitación en otra pestaña`}>
      <div className="invitation-image">
        <span className="invitation-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <div className="invitation-image-inner"><Image src={coverImage} alt={`Portada de la invitación de ${title}`} fill sizes="(min-width: 1100px) 350px, (min-width: 650px) 45vw, 82vw" className="invitation-cover" /></div>
        <span className="invitation-view">Ver invitación <Arrow diagonal /></span>
      </div>
      <div className="invitation-details"><div><p className="invitation-type">{eventType}</p><h3>{title}</h3><p className="invitation-description">{description}</p></div><span className="invitation-arrow"><Arrow diagonal /></span></div>
    </a>
  );
}
