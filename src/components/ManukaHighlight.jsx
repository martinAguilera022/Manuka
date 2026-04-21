import { motion } from "framer-motion";
import "./ManukaHighlight.css";

function ManukaHighlight() {
  const items = [
    {
      number: "1",
      title: "Aprenden creando",
      text: "Actividades pensadas para cada edad que desarrollan habilidades reales.",
      color: "#1a99aa",
    },
    {
      number: "2",
      title: "Momentos en familia",
      text: "Un espacio para compartir, desconectarse y disfrutar juntos.",
      color: "#c5b35d",
    },
    {
      number: "3",
      title: "Ven su progreso",
      text: "Cada creación queda registrada en su álbum. No es solo jugar, es crecer.",
      color: "#f7aa20",
    },
    {
      number: "4",
      title: "Mejoran su motricidad",
      text: "Estimula y fortalece la motricidad fina y la coordinación mano-ojo.",
      color: "#ec5a41",
    },
  ];

  return (
    <section id="highlight" className="manuka-highlight">
      <h2>Crear cambia algo en ellos</h2>
      <p className="subtitle">Menos pantallas. Más momentos reales.</p>

      <div className="highlight-grid">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="card"
            style={{ backgroundColor: item.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="number">{item.number}</span>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ManukaHighlight;