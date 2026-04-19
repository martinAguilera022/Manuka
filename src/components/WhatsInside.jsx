import "./WhatsInside.css";

function WhatsInside() {
  const items = [
    "Materiales listos para usar",
    "Instrucciones paso a paso",
    "Stickers y sorpresas",
    "Álbum para guardar sus creaciones",
  ];

  return (
    <section className="inside">
      <img
    src="/img/manukaPiola.png"
    alt="personaje"
    className="inside-character"
  />
      <h2 className="inside-title">¿QUÉ TRAE?</h2>

      <ul className="inside-list">
        {items.map((item, i) => (
          <li key={i}>
            <span className="check">✔</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WhatsInside;