import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./HowItWorks.css";

function HowItWorks() {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [width, setWidth] = useState(0);

  const steps = [
    {
      clases: "step1",
      title: "Elegí una suscripción",
      desc: "Actividades pensadas para su etapa",
      icon: "/img/manuka.png",
    },
    {
      clases: "step2",
      title: "Llega su caja",
      desc: "Lista para abrir y empezar",
      icon: "/img/MOCKUP_CAJA_1_FRENTE.webp",
    },
    {
      clases: "step3",
      title: "Crea y experimenta",
      desc: "Explora, prueba y se divierte",
      icon: "/img/portapintura.png",
    },
    {
      clases: "step4",
      title: "Guarda su logro",
      desc: "Suma su foto y ve su progreso",
      icon: "/img/camara.png",
    },
  ];

  const duplicatedSteps = [...steps, ...steps];

  const start = () => {
    stop();

    if (!containerRef.current) return;

    const totalWidth = containerRef.current.scrollWidth;
    const singleWidth = totalWidth / 2;

    setWidth(singleWidth);

    animationRef.current = animate(x, [0, -singleWidth], {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    });
  };

  const stop = () => {
    animationRef.current?.stop();
  };

  useEffect(() => {
    start();

    // 🔥 Recalcula cuando cargan imágenes (clave)
    const handleLoad = () => start();
    window.addEventListener("load", handleLoad);

    return () => {
      stop();
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <section className="how-section">
      <div className="how">
        <h1 className="hero-title">
          ASÍ EMPIEZA <br /> LA AVENTURA
        </h1>

        <div className="how-wrapper">
          <motion.div
            ref={containerRef}
            className="how-steps"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            dragMomentum={false}
            dragConstraints={{ left: -width, right: 0 }}
            onMouseEnter={stop}
            onMouseLeave={start}
            onTouchStart={stop}
            onTouchEnd={start}
          >
            {duplicatedSteps.map((step, i) => (
              <div className="how-step" key={i}>
                <div className="how-icon">
                  <img src={step.icon} alt="step" />
                </div>

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