import { useState } from 'react'

export default function Works() {
    const data = [
        "User Interfaces",
        "Collaboration",
        "Data Entry",
        "NEC"
    ]


    const [work, setWork] = useState("User Interfaces");

    const handleClick = (item) => {
        setWork(item);
    }
  return (
    <section id='experience' className='h-[100vh] snap-center flex flex-col items-center justify-center'>
        <div className='sm:w-[1400px] w-screen flex justify-between'>
                <div className='flex items-center' style={{flex: 1}}>
                    <ul className='sm:flex flex-col flex gap-[20px]'>
                        {data.map((item) => (
                        <li key={item} text={item} onClick={() => {
                            setWork(item);
                            handleClick(item);
                        }}>
                            <span 
                            className={`sm:text-[90px] text-[30px] font-[700] stroke-[1px] cursor-pointer relative ${work === item ? 'text-white' : 'hover:text-white text-transparent'}`}
                            style={{WebkitTextStroke: '1px white'}}
                            >{item}</span>
                        </li>
                        ))}
                    </ul>
                </div> 
                <div className="sm:flex justify-center my-auto text-[20px] border rounded-xl px-2 py-4" style={{flex: 1}}>
                {work === "User Interfaces" ? (
                    <p>Designed UI with responsive design for better user experiences.</p>
                ) : work === "Collaboration" ? (
                    <p>Collaborated with other developers on making projects.</p>
                ) : work === "Data Entry" ? (
                    <p>Focused on accuracy and effciency.</p>
                ) : work === "NEC" ?(
                    <p>Monitored polling stations to ensure smooth and fairvoting operations.</p>
                ) : (
                    null
                )}  
                </div> 
            </div>
    </section>

  )
}
