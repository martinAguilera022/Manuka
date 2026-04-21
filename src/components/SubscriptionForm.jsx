import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import "./Subscription.css";
import { useNavigate } from "react-router-dom";
export default function SubscriptionForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 8;

  const [form, setForm] = useState({
      nombreNino: "",
  edad: "",
  fechaNacimiento: "",
  nivelEducativo: "",
  nickname: "",
  alergias: "",
  infoImportante: "",

  actividades: [],
  personalidad: [],

  foto: null,
  autorizaImagen: "",

  reciclables: "",
  materiales: [],
  otroMaterial: "",

  adulto: "",
  direccion: "",
  ciudad: "",
  cp: "",
  telefono: "",
  email: "",
  metodoPago: ""
  });

  const [errors, setErrors] = useState({});

  // =========================
  // CHANGE HANDLERS
  // =========================
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setForm((p) => ({
      ...p,
      [name]: files ? files[0] : value
    }));

    setErrors((p) => ({ ...p, [name]: "" }));
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

    setErrors((p) => ({ ...p, [name]: "" }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!form.nombreNino.trim()) newErrors.nombreNino = "Ingresá el nombre";
      if (!form.edad) newErrors.edad = "Ingresá la edad";
      if (!form.fechaNacimiento) newErrors.fechaNacimiento = "Seleccioná fecha";
      if (!form.nivelEducativo) newErrors.nivelEducativo = "Seleccioná nivel";
    }

    

    if (step === 3 && form.actividades.length === 0) {
      newErrors.actividades = "Elegí al menos una actividad";
    }

    if (step === 4 && form.personalidad.length === 0) {
      newErrors.personalidad = "Elegí al menos una opción";
    }

    if (step === 5 && !form.foto) {
      newErrors.foto = "Subí una foto";
    }
    if (step === 5) {
      if (!form.autorizaImagen) newErrors.autorizaImagen = "Seleccioná opción";
    }
  if (step === 6) {
    if (!form.reciclables)
      newErrors.reciclables = "Seleccioná una opción";
  }

    if (step === 7) {
      if (!form.adulto) newErrors.adulto = "Campo obligatorio";
      if (!form.direccion) newErrors.direccion = "Campo obligatorio";
      if (!form.email.includes("@")) newErrors.email = "Email inválido";
    }

    if (step === 8 && !form.metodoPago) {
      newErrors.metodoPago = "Seleccioná método de pago";
    }
    if (step === 8) {
    if (!form.metodoPago)
      newErrors.metodoPago = "Seleccioná método de pago";
  }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

 const handleSubmit = (e) => {
  e.preventDefault();

  const isValid = validateStep();

  if (!isValid) return;

  confetti({
    particleCount: 180,
    spread: 100,
    origin: { y: 0.6 }
  });

  setSubmitted(true);
};
const handleReciclablesChange = (e) => {
  const value = e.target.value;

  setForm((p) => ({
    ...p,
    reciclables: value,
    materiales: value === "No" ? [] : p.materiales,
    otroMaterial: value === "No" ? "" : p.otroMaterial
  }));

  setErrors((p) => ({ ...p, reciclables: "" }));
};
  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
  };

  // =========================
  // SUCCESS SCREEN
  // =========================
  if (submitted) {
    return (
      <motion.div className="success-screen">
        <h2>🎉 ¡Todo listo!</h2>
        <p>Tu caja fue registrada correctamente.</p>
        <p>📦 Llegará pronto a tu casa.</p>

        <button className="" onClick={() => navigate("/")}>
          Volver a la web
        </button>
      </motion.div>
    );
  }

  return (
    <form className="subscription-form" onSubmit={handleSubmit}>

      {/* PROGRESS */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      <div className="form-progress">
        Paso {step} de {totalSteps}
      </div>

      <AnimatePresence mode="wait">

        {/* STEP 1 */}
        {step === 1 && (
          <motion.section className="form-section">
            <h3>🧒 Datos del niño/a</h3>

            <input
              name="nombreNino"
              placeholder="Nombre y apellido"
              className="form-input"
              value={form.nombreNino}
              onChange={handleChange}
            />
            {errors.nombreNino && <p className="form-error">{errors.nombreNino}</p>}

            <input
              name="edad"
              placeholder="Edad"
              className="form-input"
              value={form.edad}
              onChange={handleChange}
            />
            {errors.edad && <p className="form-error">{errors.edad}</p>}

            <label className="form-label bold">Fecha de nacimiento</label>
            <input
              name="fechaNacimiento"
              type="date"
              className="form-input"
              value={form.fechaNacimiento}
              onChange={handleChange}
            />
            {errors.fechaNacimiento && (
              <p className="form-error">{errors.fechaNacimiento}</p>
            )}

            <select
              name="nivelEducativo"
              className="form-input"
              value={form.nivelEducativo}
              onChange={handleChange}
            >
              <option value="">Nivel educativo actual</option>
              <option>Sala de 3</option>
              <option>Sala de 4</option>
              <option>Sala de 5</option>
              <option>1° grado</option>
              <option>2° grado</option>
              <option>Otro</option>
            </select>

            {errors.nivelEducativo && (
              <p className="form-error">{errors.nivelEducativo}</p>
            )}
          </motion.section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.section className="form-section">
            <h3>🧠 Info adicional</h3>

            <input
              name="nickname"
              placeholder="¿Cómo le dicen?"
              className="form-input"
              value={form.nickname}
              onChange={handleChange}
            />

            <input
              name="alergias"
              placeholder="Alergias o sensibilidad"
              className="form-input"
              value={form.alergias}
              onChange={handleChange}
            />

            <textarea
              name="infoImportante"
              placeholder="Algo importante..."
              className="form-input"
              value={form.infoImportante}
              onChange={handleChange}
            />

           
          </motion.section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.section className="form-section">
            <h3>🎨 Actividades</h3>

            {["Pintar", "Dibujar", "Recortar", "Construir"].map((a) => (
              <label key={a} className="form-label">
                <input
                  type="checkbox"
                  checked={form.actividades.includes(a)}
                  onChange={() => handleCheckbox("actividades", a)}
                />
                {a}
              </label>
            ))}

            {errors.actividades && (
              <p className="form-error">{errors.actividades}</p>
            )}
          </motion.section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <motion.section className="form-section">
            <h3>✨ Personalidad</h3>

            {["Curioso", "Creativo", "Tranquilo", "Inquieto"].map((p) => (
              <label key={p} className="form-label">
                <input
                  type="checkbox"
                  checked={form.personalidad.includes(p)}
                  onChange={() => handleCheckbox("personalidad", p)}
                />
                {p}
              </label>
            ))}

            {errors.personalidad && (
              <p className="form-error">{errors.personalidad}</p>
            )}
          </motion.section>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <motion.section className="form-section">
            <h3>Subí una foto para crear sus figuritas personalizadas 💛</h3>

            <input
              type="file"
              name="foto"
              className="form-input"
              onChange={handleChange}
            />
            
            {errors.foto && <p className="form-error">{errors.foto}</p>}
            <label className="form-label">¿Autorizás el uso de la imagen únicamente para la creación del álbum y stickers?</label>
            <select
              name="autorizaImagen"
              className="form-input"
              value={form.autorizaImagen}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              <option>Sí</option>
              <option>No</option>
            </select>

            {errors.autorizaImagen && (
              <p className="form-error">{errors.autorizaImagen}</p>
            )}
          </motion.section>
        )}
{step === 6 && (
  <motion.section className="form-section">
    <h3>♻️ Materiales complementarios</h3>

    <label className="form-label">
      ¿Suelen tener en casa materiales reciclables?
    </label>

    <select
      name="reciclables"
      className="form-input"
      value={form.reciclables}
      onChange={handleReciclablesChange}
    >
      <option value="">Seleccionar</option>
      <option>Sí</option>
      <option>No</option>
      <option>A veces</option>
    </select>

    {errors.reciclables && <p className="form-error">{errors.reciclables}</p>}

    {(form.reciclables === "Sí" || form.reciclables === "A veces") && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="form-label" style={{ marginTop: "12px" }}>
          ¿Qué suelen tener?
        </p>

        {["Rollos de papel", "Cajas", "Botellas", "Tapitas", "Revistas"].map(
          (item) => (
            <label key={item} className="form-label">
              <input
                type="checkbox"
                checked={form.materiales.includes(item)}
                onChange={() => handleCheckbox("materiales", item)}
              />
              {item}
            </label>
             
          )
        )}

        <input
          name="otroMaterial"
          placeholder="Otro material"
          className="form-input"
          value={form.otroMaterial}
          onChange={handleChange}
        />
        
      </motion.div>
    )}
  </motion.section>
)}
        {/* STEP 7 */}
        {step === 7 && (
          <motion.section className="form-section">
            <h3>🏡 Envío</h3>

            <input
              name="adulto"
              placeholder="Adulto responsable"
              className="form-input"
              value={form.adulto}
              onChange={handleChange}
            />
            {errors.adulto && <p className="form-error">{errors.adulto}</p>}

            <input
              name="direccion"
              placeholder="Dirección"
              className="form-input"
              value={form.direccion}
              onChange={handleChange}
            />
            {errors.direccion && <p className="form-error">{errors.direccion}</p>}

            <input
              name="email"
              placeholder="Email"
              className="form-input"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </motion.section>
        )}

        {/* STEP 8 */}
        {step === 8 && (
          <motion.section className="form-section">
            <h3>💳 Pago</h3>

           <select
  name="metodoPago"
  className="form-input"
  value={form.metodoPago}
  onChange={handleChange}
>
              <option value="">Método de pago</option>
              <option>Tarjeta</option>
              <option>Transferencia</option>
              <option>Otro</option>
            </select>

            {errors.metodoPago && (
  <p className="form-error">{errors.metodoPago}</p>
)}
          </motion.section>
        )}

      </AnimatePresence>

      {/* BOTONES */}
      <div className="form-buttons">
        {step > 1 && (
          <button type="button" className="form-button secondary" onClick={prevStep}>
            Atrás
          </button>
        )}

        {step < totalSteps && (
          <button type="button" className="form-button" onClick={nextStep}>
            Siguiente
          </button>
        )}

        {step === totalSteps && (
          <button type="submit" className="form-button">
            Confirmar
          </button>
        )}
      </div>

    </form>
  );
}