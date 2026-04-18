import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";

import CTA from "./components/FinalCTA";
import Includes from "./components/Includes";
import Album from "./components/Album";
import Journey from "./components/ManukaHighlight";
import QuienesSomos from "./components/QuienesSomos";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      
      <QuienesSomos/>
      <div className="divider-color">
  <span style={{ background: "var(--primary)" }} />
  <span style={{ background: "var(--accent)" }} />
  <span style={{ background: "var(--secondary)" }} />
  <span style={{ background: "var(--fun)" }} />
</div>
      <HowItWorks />
      
      <Journey />

      <CTA />
    </div>
  );
}

export default App;