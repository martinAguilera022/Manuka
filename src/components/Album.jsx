import "./Album.css";

function Album() {
  return (
    <section className="album">
      <h2 className="album-title">Un recuerdo que crece con ellos</h2>

      <p className="album-sub">
        Cada caja es un paso en su propio recorrido creativo
      </p>

      <div className="album-steps">
        <div className="album-card">
          <div className="album-icon">🎨</div>
          <p>Crean su manualidad</p>
        </div>

        <div className="album-card">
          <div className="album-icon">📸</div>
          <p>Guardan su foto</p>
        </div>

        <div className="album-card">
          <div className="album-icon">📖</div>
          <p>Completan su álbum</p>
        </div>
      </div>
    </section>
  );
}

export default Album;