import { BrowserRouter, Routes, Route } from "react-router-dom";
  
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/FinalCTA";
import Journey from "./components/ManukaHighlight";
import QuienesSomos from "./components/QuienesSomos";
import AgeBoxes from "./components/AgeBoxes";
import WhatsInside from "./components/WhatsInside";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import SubscriptionForm from "./components/SubscriptionForm";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <QuienesSomos />

      <div className="divider-color">
        <span style={{ background: "var(--color-primary)" }} />
        <span style={{ background: "var(--color-accent)" }} />
        <span style={{ background: "var(--color-secondary)" }} />
        <span style={{ background: "var(--color-error)" }} />
      </div>

      <HowItWorks />

      <div className="divider-color">
        <span style={{ background: "var(--color-primary)" }} />
        <span style={{ background: "var(--color-accent)" }} />
        <span style={{ background: "var(--color-secondary)" }} />
        <span style={{ background: "var(--color-error)" }} />
      </div>

      <AgeBoxes />
      <WhatsInside />
      <Journey />
      <Comments />
      <CTA />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscripcion" element={<SubscriptionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;