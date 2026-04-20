import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <h3 className="footer-logo">Manuka</h3>

        <p className="footer-text">
          Momentos que se crean con las manos… y se quedan para siempre.
        </p>

        {/* Redes */}
        <div className="footer-socials">
          <a href="#" target="_blank">Instagram</a>
          <a href="#" target="_blank">WhatsApp</a>
          <a href="#" target="_blank">TikTok</a>
        </div>

        {/* Mini CTA */}
        <p className="footer-cta">
          ¿Tenés dudas? Escribinos
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} Manuka
        </p>

      </div>
    </footer>
  );
}

export default Footer;