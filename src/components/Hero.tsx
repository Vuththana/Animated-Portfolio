import Navbar from "./Navbar"
import Typewriter from 'typewriter-effect';
import PDFDownloadButton from "./DownloadPdf";

export const Hero = () => {
  
  return (
    <section id="hero" className="h-[100vh] snap-center flex flex-col items-center justify-between">
        <Navbar />
        <div className="sm:w-[1400px] md:w-screen w-screen h-[100vh] flex justitfy-between mx-auto snap-center">
            <div className="sm:w-[1400px] w-screen sm:flex sm:py-0 py-32 justitfy-between mx-auto snap-center" >
              <div className="flex flex-col justify-center gap-[20px] sm:flex-1" >
                <h1 className="md:text-center lg:text-left sm:text-center text-center font-black text-white lg:text-[80px] 
                sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
                  Hello, I'm 
                <Typewriter
                  options={{
                    strings: ['Vuththana', 'Goros'],
                    autoStart: true,
                    loop: true,
                    cursor: ''
                  }}
                />
                </h1>
                <p className="sm:text-[20px] md:text-center sm:text-center lg:text-left text-center lg:p-0 p-10 overflow-hidden">Developer in Cambodia, thriving for new challenge for new experience, key team player and knowledge sharing</p>
                <div className="flex gap-2 sm:justify-normal justify-center md:mx-auto lg:mx-0">
                  <div>
                  <PDFDownloadButton fileName="KeoVuththana_CV.pdf" >
                    Download CV
                  </PDFDownloadButton>
                  </div>
                </div>
              </div>

            </div>


        </div>
        

    </section>
  )
}
