import { useState } from "react";
import "./Navbar.css";
import LogoNav from "../assets/logo-new.svg?react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
const navigate = useNavigate();
  return (
    <nav className="navbar">
    
      <LogoNav className="logo-svg" />

      <button 
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
<ul className={`menu ${open ? "open" : ""}`}>
  <li><a href="#">Inicio</a></li>
  <li><a href="#HowItWorks">Cómo funciona</a></li>
  <li><a href="#highlight">Beneficios</a></li>
  <li><a href="#AgeBoxes">Ver Kits</a></li>
  <li><a href="#final-cta">Contacto</a></li>
  <li><button className="cta-btn" onClick={() => navigate("/inscripcion")}>Suscribirme</button></li>
</ul>
    </nav>
    
  );
}

export default Navbar;