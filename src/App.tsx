import { useEffect, useRef, useState } from "react";
import StarsCanvas from "./components/canvas/Star";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import Preloader from "./components/Preloader";
import Works from "./components/Experiences";
import { BrowserRouter } from "react-router-dom";
import SocialLinks from "./components/SocialLinks";


export default function App() {
  return (
    <BrowserRouter>
    <div className="h-[100vh] snap-y scroll-smooth snap-mandatory overflow-y-auto bg-black text-white bg-no-repeat- bg-contain" style={{scrollbarWidth: 'none'}}>

      <div className="relative z-50">
      <Preloader />
      </div>
      <div className="relative z-30">
      <SocialLinks />
      <Hero />
      <Works />
      <Contact />
      <StarsCanvas />
      
      </div>

    </div>
    </BrowserRouter>
  )
}
