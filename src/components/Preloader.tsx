import { motion } from "framer-motion";
import {  useState } from "react";

interface PreloaderProps {
  timer: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ timer }) => {
    const [isVisible, setIsVisible] = useState(true);


    return (
        <>
        <motion.div
          animate={timer ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ delay: 3, duration: 2, ease: "easeOut" }}
          onAnimationStart={() => {
          }}
          onAnimationComplete={() => {
            if (!timer) {
              setIsVisible(false); // Hide element after animation completes if timer is false
            }
          }}
          style={{ display: isVisible ? 'block' : 'none' }}
        >
          <div className="bg-[#000] h-[100vh] flex z-55 justify-center items-center overflow-hidden fixed top-0 right-0 left-0">
            <div className="flex items-center justify-between w-[300px] h-[60px] font-[800]" style={{scrollbarWidth: "none"}}>
              {[
                { name: 'Develop,' },
                { name: 'Solve,' },
                { name: 'Deploy.' }
              ].map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                >
                  <span className="text-white text-[20px]">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </>
    )
}

export default Preloader;