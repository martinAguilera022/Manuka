import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const controls = useAnimation();

  const steps = [
    {
      clases: "step1",
      title: "Elegi una suscripción",
      desc: "Actividades pensadas para su etapa",
      emoji: "👶",
    },
    {
      clases: "step2",
      title: "Llega su caja",
      desc: "Lista para abrir y empezar",
      emoji: "📦",
    },
    {
      clases: "step3",
      title: "Crea y experimenta",
      desc: "Explora, prueba y se divierte",
      emoji: "🎨",
    },
    {
      clases: "step4",
      title: "Guarda su logro",
      desc: "Suma su foto y ve su progreso",
      emoji: "📸",
    },
  ];

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 18, // 👈 más suave
        ease: "linear",
      },
    });
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="how-section">
      <div className="how">
        <h1 className="hero-title">
          Jugando hoy para mañana  <br /> desarrollar su futuro
        </h1>

        <div className="how-wrapper">
          <motion.div
            className="how-steps"
            animate={controls}
            onMouseEnter={() => controls.stop()} // ⏸ pausa en hover
            onMouseLeave={startAnimation} // ▶️ reanuda
            onTouchStart={() => controls.stop()} // 📱 pausa en mobile
            onTouchEnd={startAnimation}
            drag="x"
            dragConstraints={{ left: -300, right: 0 }} // 👈 evita que se vaya infinito al arrastrar
          >
            {[...steps, ...steps].map((step, i) => (
              <div className="how-step" key={i}>
                <div className="how-icon">{step.emoji}</div>

                <div
                  className={`step-number fondo-${step.clases} ${step.clases}`}
                >
                  {i % steps.length + 1}
                </div>

                <h3 className={step.clases}>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;