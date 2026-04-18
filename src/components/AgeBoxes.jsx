import "./AgeBoxes.css";

function AgeBoxes() {
  const boxes = [
    {
      age: "3–4 años",
      title: "Explorar",
      desc: "Descubrir jugando",
      image: "/img/0-36m.png",
      color: "#1a99aa",
    },
    {
      age: "5–6 años",
      title: "Crear",
      desc: "Aprender haciendo",
      image: "/img/age2.png",
      color: "#f7aa20",
    },
    {
      age: "7–8 años",
      title: "Experimentar",
      desc: "Desafíos creativos",
      image: "/img/age4.png",
      color: "#c5b35d",
    },
  ];

  return (
    
      <div className="age-grid">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="age-card"
            style={{ backgroundImage: `url(${box.image})` }}
          >
            {/* overlay color */}
            <div
              className="age-overlay"
              style={{ backgroundColor: box.color }}
            />

            {/* contenido */}
            <div className="age-content">
              <p className="age-range">{box.age}</p>
              <h3>{box.title}</h3>
              <p>{box.desc}</p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default AgeBoxes;