import Navbar from "./Navbar"
import { styles } from "../styles"
import Typewriter from 'typewriter-effect';
import BlackholeCanvas from "./canvas/BlackHole";

export const Hero = () => {
  return (
    <section id="hero" className="h-[100vh] snap-center flex flex-col items-center justify-between">
        <Navbar />
        <div className="w-[1400px] h-[100vh] flex justitfy-between mx-auto snap-center">
            <div className="w-[1400px] h-[100vh] flex justitfy-between mx-auto snap-center" >
              <div className="flex flex-col justify-center gap-[20px]" style={{flex: 2}}>
                
                <h1 className={styles.heroHeadText}>Hello, I'm 
                <Typewriter
                  options={{
                    strings: ['Vuththana', 'Goros'],
                    autoStart: true,
                    loop: true,
                    cursor: ''
                  }}
                />
                </h1>
                <p className="text-[20px]">Developer in Cambodia, thriving for new challenge for new experience, key team player and knowledge sharing</p>
              </div>
             
            </div>
            <BlackholeCanvas />
        </div>
        

    </section>
  )
}
