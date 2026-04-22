import { useEffect, useState } from "react";
import "./WhatsInside.css";

function WhatsInside() {
  const items = [
    {
     
      img: "/img/mockupinterior2ConManija.webp",
    },
     {
      
      img: "/img/mockupInterior1ConManija.webp",
    },
    {
     
      img: "/img/mockupTapasAlbum.webp",
    },
   
    {
     
      img: "/img/mockupInteriordealbum.webp",
    },
     {
      
      img: "/img/MockupTAPA1.webp",
    },
     {
      
      img: "/img/MockupTAPA2.webp",
    },
     {
      
      img: "/img/MockupTAPA3.webp",
    },
  ];

  const [index, setIndex] = useState(0);

const [startX, setStartX] = useState(null);
const [isDragging, setIsDragging] = useState(false);
  // 🔥 autoplay tipo AgeBoxes
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % items.length);
  }, 3000);

  return () => clearInterval(interval);
}, [items.length]);
const handleStart = (e) => {
  setStartX(e.touches ? e.touches[0].clientX : e.clientX);
  setIsDragging(true);
};

const handleEnd = (e) => {
  if (startX === null) return;

  const endX = e.changedTouches
    ? e.changedTouches[0].clientX
    : e.clientX;

  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      setIndex((prev) => (prev + 1) % items.length);
    } else {
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  }

  setStartX(null);
  setIsDragging(false);
};

  return (
    <section className="inside">
      {/* PERSONAJE */}
      <img
        src="/img/manukaPiola.png"
        alt="personaje"
        className="inside-character"
      />

      {/* TITULO */}
      <h2 className="inside-title">¿QUÉ TRAE?</h2>

      {/* LISTA */}
      <ul className="inside-list">
  <li>
    <span className="check">✔</span>
    Materiales listos para usar
  </li>

  <li>
    <span className="check">✔</span>
    Instrucciones paso a paso
  </li>

  <li>
    <span className="check">✔</span>
    Stickers y sorpresas
  </li>

  <li>
    <span className="check">✔</span>
    Álbum para guardar sus creaciones
  </li>
</ul>

      {/* CAROUSEL TIPO AGEBOXES */}
     
      <div className="carousel-wrapper">
  <div
    className="carousel-track"
    onMouseDown={handleStart}
    onMouseUp={handleEnd}
    onMouseLeave={handleEnd}
    onTouchStart={handleStart}
    onTouchEnd={handleEnd}
    style={{
      cursor: isDragging ? "grabbing" : "grab",
    }}
  >
    {items.map((item, i) => (
      <div
        className="card-foto"
        key={i}
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: "transform 0.6s ease",
        }}
      >
        <img src={item.img} alt={item.text} />
        <p>{item.text}</p>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default WhatsInside;