import "./Includes.css";

function Includes() {
  const items = [
    {
      icon: "✂️",
      title: "Materiales",
      desc: "Todo listo para usar, sin comprar nada extra",
    },
    {
      icon: "📘",
      title: "Guía paso a paso",
      desc: "Instrucciones claras y amigables",
    },
    {
      icon: "🎨",
      title: "Actividades",
      desc: "Propuestas creativas para cada edad",
    },
    {
      icon: "⭐",
      title: "Stickers",
      desc: "Coleccionables para cada logro",
    },
    {
      icon: "📸",
      title: "Álbum",
      desc: "Guardan sus creaciones y recuerdos",
    },
  ];

  return (
    <section className="includes">
      <h2 className="includes-title">¿Qué incluye la caja?</h2>

      <div className="includes-grid">
        {items.map((item, i) => (
          <div key={i} className="include-card">
            <div className="include-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Includes;