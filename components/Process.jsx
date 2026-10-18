const steps = [
  { number: "01", title: "Te escucho", text: "Me cuentas qué celebras, cómo lo imaginas y esos detalles que hacen que sea tuyo." },
  { number: "02", title: "Le damos forma", text: "Diseño tu invitación y afinamos juntos la estética, los textos y la información de tu evento." },
  { number: "03", title: "Empieza la ilusión", text: "Recibes un enlace listo para compartir. Tus invitados abren la invitación y comienza la cuenta atrás." },
];

export default function Process() {
  return (
    <section id="proceso" className="process-section" aria-labelledby="process-title"><div className="section-shell"><div className="section-heading"><div><p className="eyebrow">De la idea al recuerdo</p><h2 id="process-title">Algo especial.<br /><em>Así de sencillo.</em></h2></div><p>Un proceso cercano, de principio a fin.<br />Y una invitación que habla de ti.</p></div><div className="process-steps">{steps.map(({ number, title, text }) => <div className="process-step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
  );
}
