import { motion } from "framer-motion";
import "./ManukaHighlight.css";

function ManukaHighlight() {
  return (
 <section className="manuka-highlight">
  <h2>Crear cambia algo en ellos</h2>
  <p className="subtitle">
    Menos pantallas. Más momentos reales.
  </p>

  <div className="highlight-grid">

    <div className="card">
      <img src="/img/creando.jpg" alt="" />
      <h3>Aprenden creando</h3>
      <p>
        Actividades pensadas para cada edad que desarrollan habilidades reales.
      </p>
    </div>

    <div className="card">
      <img src="/img/familia.jpg" alt="" />
      <h3>Momentos en familia</h3>
      <p>
        Un espacio para compartir, desconectarse y disfrutar juntos.
      </p>
    </div>

    <div className="card">
      <img src="/img/album.jpg" alt="" />
      <h3>Ven su progreso</h3>
      <p>
        Cada creación queda registrada en su álbum. No es solo jugar, es crecer.
      </p>
    </div>

    <div className="card">
      <img src="/img/motricidad.jpg" alt="" />
      <h3>Mejoran su motricidad</h3>
      <p>
      Estimulan la creatividad y fortalecen la motricidad fina y la coordinación mano-ojo.
      </p>
    </div>

  </div>
</section>
  );
}

export default ManukaHighlight;