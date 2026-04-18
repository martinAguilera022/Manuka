import { useState } from "react";
import "./Navbar.css";
import LogoNav from "../assets/logo-new.svg?react";
function Navbar() {
  const [open, setOpen] = useState(false);

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
  <li><a href="#">Cómo funciona</a></li>
  <li><a href="#">Beneficios</a></li>
  <li><a href="#">Contacto</a></li>
  <li><button className="cta-btn">Suscribirme</button></li>
</ul>
     
    </nav>
    
  );
}

export default Navbar;