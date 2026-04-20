import "./FinalCTA.css";
import { useNavigate } from "react-router-dom";
function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="final-cta">
      <div className="final-content">
        
        <p className="final-text">
          No se trata de hacerlo perfecto.
          <br />
          Se trata de compartir el momento.
        </p>

        <p className="final-sub">
          Un kit, una mesa… y algo que van a recordar juntos.
          <br />
          Empezá hoy a crear esos momentos.
        </p>

        <button className="final-btn" onClick={() => navigate("/inscripcion")}>
          Quiero mi kit Manuka
        </button>

      </div>
    </section>
  );
}

export default FinalCTA;