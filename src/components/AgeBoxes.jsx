import "./AgeBoxes.css";
import { useState, useEffect } from "react";

function AgeBoxes() {
  const boxes = [
    {
      age: "3–4 años",
      title: "Explorador",
      desc: "Descubrir jugando",
      images: [
        "/img/MOCKUP_CAJA_1_FRENTE.svg",
        "/img/MOCKUP_CAJA_1_TRASERA.svg",
        "/img/MOCKUPCAJA1_SEMIABIERTA1.svg",
        "/img/MOCKUPCAJA1_COSTADO1.svg",
        "/img/MOCKUPCAJA1_COSTADO2.svg"
      
      ],
      color: "#1a99aa",
    },
    {
      age: "5–6 años",
      title: "Creador",
      desc: "Aprender haciendo",
      images: [
        "/img/MOCKUP_CAJA_2_FRENTE.svg",
        "/img/MOCKUP_CAJA_2_TRASERA.svg",
        "/img/MOCKUPCAJA2_SEMIABIERTA1.svg",
        "/img/MOCKUPCAJA2_COSTADO1.svg",
        "/img/MOCKUPCAJA2_COSTADO2.svg"

      ],
      color: "#ec5a41",
    },
    {
      age: "7–8 años",
      title: "Experto",
      desc: "Desafíos creativos",
      images: [
        "/img/MOCKUP_CAJA_3_FRENTE.svg",
        "/img/MOCKUP_CAJA_3_TRASERA.svg",
        "/img/MOCKUPCAJA3_SEMIABIERTA1.svg",
        "/img/MOCKUPCAJA3_COSTADO1.svg",
        "/img/MOCKUPCAJA3_COSTADO2.svg"
      ],
      color: "#c5b35d",
    },
  ];

  const [indexes, setIndexes] = useState(boxes.map(() => 0));
  const [paused, setPaused] = useState(null);

  const [startX, setStartX] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const next = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val + 1) % boxes[i].images.length
          : val
      )
    );
  };

  const prev = (i) => {
    setIndexes((prev) =>
      prev.map((val, idx) =>
        idx === i
          ? (val - 1 + boxes[i].images.length) %
            boxes[i].images.length
          : val
      )
    );
  };

  // 👉 autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => {
          if (paused === i) return val;

          const total = boxes[i].images.length;
          return total > 1 ? (val + 1) % total : val;
        })
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [paused]);

  // 👉 swipe
  const handleStart = (e, i) => {
    setStartX(e.touches ? e.touches[0].clientX : e.clientX);
    setActiveCard(i);
    setPaused(i);
  };

  const handleEnd = (e) => {
    if (startX === null || activeCard === null) return;

    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) next(activeCard);
      else prev(activeCard);
    }

    setStartX(null);
    setActiveCard(null);
    setPaused(null);
  };

  return (
    <div className="age">
      <h2 className="age-title">
        CONOCÉ LOS <br /> KITS POR EDADES
      </h2>
      <h3 className="age-subtitle">Todos los meses una aventura nueva</h3>
      <div className="age-grid">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="age-card-new"
            style={{ "--accent": box.color }}
            onMouseEnter={() => setPaused(i)}
            onMouseLeave={() => setPaused(null)}
          >
            {/* 🎠 carrusel */}
            <div
              className="age-img"
              onMouseDown={(e) => handleStart(e, i)}
              onMouseUp={handleEnd}
              onTouchStart={(e) => handleStart(e, i)}
              onTouchEnd={handleEnd}
            >
              <div
                className="age-track"
                style={{
                  transform: `translateX(-${indexes[i] * 100}%)`,
                }}
              >
                {box.images.map((img, idx) => (
                  <img key={idx} src={img} alt={box.title} />
                ))}
              </div>
            </div>

            {/* contenido */}
            <div className="age-body">
              <p className="age-tags">{box.age}</p>
              <h3>{box.title}</h3>

              <div className="age-row">
                <p className="age-desc">{box.desc}</p>
                <button className="age-btn">Ver kit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeBoxes;