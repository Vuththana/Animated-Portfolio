import StarsCanvas from "./components/canvas/Star";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import Preloader from "./components/Preloader";
import Works from "./components/Experiences";
import { BrowserRouter } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div
        className="min-h-screen snap-y snap-mandatory overflow-y-auto bg-black text-white bg-no-repeat bg-contain"
        style={{ scrollbarWidth: "none" }}
      >
        {/* Preloader */}
        <div className="relative z-50">
          <Preloader timer={false} />
        </div>

        {/* Main Sections */}
        <div className="relative z-30 flex flex-col">
          <SocialLinks />

          {/* Hero Section */}
          <section className="snap-start min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16">
            <Hero />
          </section>

          {/* Works / Experience */}
          <section className="snap-start min-h-screen px-4 sm:px-8 md:px-16">
            <Works />
          </section>

          {/* Contact */}
          <section className="snap-start min-h-screen px-4 sm:px-8 md:px-16">
            <Contact />
          </section>

          {/* Background Canvas */}
          <StarsCanvas />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
