import React, { useState } from 'react'
import DiscordCanvas from './canvas/Discord'
import { easeInOut, easeOut, motion } from 'framer-motion';
import { easeIn } from 'framer-motion/dom';

export default function Works() {
    const data = [
        "User Interfaces",
        "Social Media",
    ]


    const [work, setWork] = useState("User Interfaces");
    const [isOpen, setIsOpen] = useState(false)
  return (
    <section id='work' className='h-[100vh] snap-center flex flex-col items-center justify-center'>
        <div className='w-[1400px] flex justify-between'>
                <div className='flex items-center' style={{flex: 1}}>
                    <ul className='flex flex-col gap-[20px]'>
                        {data.map((item) => (
                        <li key={item} text={item} onClick={() => {
                            setWork(item);
                            setIsOpen(isOpen => !isOpen)
                        }}>
                            <span 
                            className={`text-[90px] font-[700] stroke-[1px] cursor-pointer relative ${isOpen ? 'text-white' : 'hover:text-white text-transparent'}`}
                            style={{WebkitTextStroke: '1px white'}}
                            >{item}</span>
                        </li>
                        ))}
                    </ul>
                </div> 
                <div className="flex" style={{flex: 1}}>
                {work === "User Interfaces" ? (
                    <p>weqw</p>
                ) : work === "Social Media" ? (
                    <DiscordCanvas />
                ) : (
                     null
                )}  
                </div> 
            </div>
    </section>

  )
}
