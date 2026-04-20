import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./Subscription.css";

export default function SubscriptionForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const [form, setForm] = useState({
    nombreNino: "",
    edad: "",
    actividades: [],
    personalidad: [],
    direccion: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleCheckbox = (name, value) => {
    setForm((prev) => {
      const exists = prev[name].includes(value);
      return {
        ...prev,
        [name]: exists
          ? prev[name].filter((v) => v !== value)
          : [...prev[name], value]
      };
    });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    }); 

    alert("Inscripción enviada 💛");
  };

  return (
    <form className="subscription-form" onSubmit={handleSubmit}>

      {/* =========================
          PROGRESO VISUAL
      ========================= */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="form-progress">
        ✨ Paso {step} de {totalSteps}
      </div>

      {/* =========================
          STEPS ANIMADOS
      ========================= */}
      <AnimatePresence mode="wait" initial={false}>

        {/* STEP 1 */}
        {step === 1 && (
          <motion.section
            key="step1"
            className="form-section"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <h3>🧒 Niño/a</h3>

            <input
              className="form-input"
              name="nombreNino"
              placeholder="Nombre"
              onChange={handleChange}
            />

            <input
              className="form-input"
              name="edad"
              placeholder="Edad"
              onChange={handleChange}
            />
          </motion.section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.section
            key="step2"
            className="form-section"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <h3>🎨 Intereses</h3>

            {["Pintar", "Dibujar", "Recortar"].map((a) => (
              <label className="form-label" key={a}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox("actividades", a)}
                />
                {a}
              </label>
            ))}
          </motion.section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.section
            key="step3"
            className="form-section"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <h3>🧠 Personalidad</h3>

            {["Curioso", "Creativo", "Tranquilo"].map((p) => (
              <label className="form-label" key={p}>
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox("personalidad", p)}
                />
                {p}
              </label>
            ))}
          </motion.section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <motion.section
            key="step4"
            className="form-section"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <h3>🏡 Envío</h3>

            <input
              className="form-input"
              name="direccion"
              placeholder="Dirección"
              onChange={handleChange}
            />

            <input
              className="form-input"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </motion.section>
        )}

      </AnimatePresence>

      {/* =========================
          BOTONES
      ========================= */}
      <div className="form-buttons">

        {step > 1 && (
          <button
            type="button"
            className="form-button secondary"
            onClick={prevStep}
          >
            Atrás
          </button>
        )}

        {step < totalSteps ? (
          <button
            type="button"
            className="form-button"
            onClick={nextStep}
          >
            Siguiente
          </button>
        ) : (
          <button type="submit" className="form-button">
            Enviar 💛
          </button>
        )}

      </div>

    </form>
  );
}