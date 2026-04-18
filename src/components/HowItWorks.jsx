import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const x = useMotionValue(0);
  const animationRef = useRef(null);

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

  const start = () => {
    stop(); // evita duplicar animaciones

    animationRef.current = animate(x, -1000, {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    });
  };

  const stop = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  useEffect(() => {
    start();
    return () => stop();
  }, []);

  return (
    <section className="how-section">
      <div className="how">
        <h1 className="hero-title">
          Jugando hoy para mañana <br /> desarrollar su futuro
        </h1>

        <div className="how-wrapper">
          <motion.div
            className="how-steps"
            style={{ x }} // 👈 clave
            onMouseEnter={stop}
            onMouseLeave={start}
            onTouchStart={stop}
            onTouchEnd={start}
            drag="x"
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