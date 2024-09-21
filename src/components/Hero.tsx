import Navbar from "./Navbar"
import Typewriter from 'typewriter-effect';
import EarthCanvas from "./canvas/Earth";
import PDFDownloadButton from "./DownloadPdf";

export const Hero = () => {
  
  return (
    <section id="hero" className="h-[100vh] snap-center flex flex-col items-center justify-between">
        <Navbar />
        <div className="sm:w-[1400px] w-screen h-[100vh] flex justitfy-between mx-auto snap-center">
            <div className="sm:w-[1400px] w-screen sm:flex sm:py-0 py-32 justitfy-between mx-auto snap-center " >
              <div className="flex flex-col justify-center gap-[20px] sm:flex-1" >
              <div className="sm:h-[900px] sm:w-[800px] h-[180px] sm:absolute sm:right-[-90px]">
              <EarthCanvas />
            </div>
                <h1 className="text-center sm:text-left font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">Hello, I'm 
                <Typewriter
                  options={{
                    strings: ['Vuththana', 'Goros'],
                    autoStart: true,
                    loop: true,
                    cursor: ''
                  }}
                />
                </h1>
                <p className="sm:text-[20px] sm:text-left text-center overflow-hidden">Developer in Cambodia, thriving for new challenge for new experience, key team player and knowledge sharing</p>
                <div className="flex gap-2 sm:justify-normal justify-center">
                  <div>
                  <PDFDownloadButton fileName="=KeoVuththana_CV.pdf" >
                    Download CV
                  </PDFDownloadButton>
                  </div>
                  <div>
                  <PDFDownloadButton fileName="=KeoVuththana_RESUME.pdf" >
                    Download Resume
                  </PDFDownloadButton>
                  </div>
                </div>
              </div>

            </div>


        </div>
        

    </section>
  )
}
