import "./QuienesSomos.css";
import star from "../assets/star.png";

function QuienesSomos() {
  return (
    <section className="quienes">

      <img 
        src="/img/manuka-2.png" 
        alt="personaje" 
        className="personaje"
      />

      <div className="rating">
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <img key={i} src={star} alt="star" />
    ))}
  </div>

  <span>4.9/5 +21K familias satisfechas</span>
</div>
      <h2>
        Cria niños curiosos
        <br />
         y capaces de crear
      </h2>

      <p className="subtitle">
        En Manuka, tu hijo crea, explora y se convierte en protagonista.
      </p>

      <button className="cta">
        Explorar más
      </button>

    </section>
  );
}

export default QuienesSomos;