import { useState, useEffect } from "react";
import "./Hero.css";
import img1 from "../assets/manualidades1.jpeg";
import img2 from "../assets/manualidades2.jpeg";
import img3 from "../assets/manualidades3.jpeg";
import img4 from "../assets/manualidades4.jpeg";


function Hero() {
  const images = [img1, img2, img3,img4];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Fondo */}
      <div className="hero-bg">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={i === index ? "active" : ""}
            alt=""
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="overlay" />

      {/* Contenido */}
      <div className="hero-content">
        <h1>PEQUEÑAS MANOS, GRANDES MENTES</h1>
        <p>En Manuka creemos en ensuciarse las manos, en intentar sin miedo y en crear sin pantallas</p>
        <button>Conocer mas</button>
      </div>
    </section>
  );
}

export default Hero;