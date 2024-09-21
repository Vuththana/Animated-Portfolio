import { useState } from 'react';

export default function Works() {
    const data = [
        "Front-End",
        "Back-End",
        "Collaboration",
        "Data Entry",
        "NEC"
    ];

    const [work, setWork] = useState("Front-End");

    const handleClick = (item: string) => {
        setWork(item);
    };


    return (
        <section id='experience' className='h-[100vh] snap-center flex flex-col items-center justify-center'>
            <div className='sm:w-[1400px] w-screen sm:flex justify-between'>
                <div className='sm:flex items-center sm:flex-1'>
                    <ul className='flex flex-col gap-[20px] justify-center items-center'>
                        {data.map((item) => (
                            <li key={item} onClick={() => handleClick(item)}>
                                <span 
                                    className={`sm:text-[90px] text-[30px] font-[700] stroke-[1px] cursor-pointer relative ${work === item ? 'text-white' : 'hover:text-white text-transparent'}`}
                                    style={{ WebkitTextStroke: '1px white' }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div> 
                <div className="sm:flex justify-center my-auto text-[20px] sm:flex-1 sm:mt-0 mt-10 sm:mx-0 mx-2">
                    <div className=' sm:w-[600px] sm:h-[600px] h-[400px] border border-[#1c1c21] rounded-xl sm:px-4 py-4 bg-[#0e0e10]'>
                            {work === "Front-End" ? (
                                <>
                                    <img className='mx-auto sm:w-[700px] w-[600px]' src="https://threejscc-portfolio.vercel.app/assets/grid3.png"  />
                                    <h1 className='text-left text-[30px] font-[600] mt-3 px-4'>UI Design</h1>
                                    <p className='px-4'>Designed Front End with Responsive Design to make user experiences more appealing</p>
                                </>
                            ) : work === "Back-End" ? (
                                <>
                                <img className='mx-auto sm:w-[200px] w-[200px]' src="https://cdni.iconscout.com/illustration/premium/thumb/backend-of-developer-illustration-download-in-svg-png-gif-file-formats--html-logo-web-back-end-development-programmer-pack-design-illustrations-6109660.png?f=webp" />
                                <h1 className='text-left text-[30px] font-[600] mt-3 px-4'>Backend Design</h1>
                                <p className='px-4'>Designed and Optimized MySQL database schemas to support high-performance queries and transactions.</p>
                                </>
                            ): work === "Collaboration" ? (
                                <>
                                <img className='mx-auto sm:w-[200px] w-[200px]' src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1286.gif" />
                                <h1 className='text-left text-[30px] font-[600] mt-3 px-4'>Team Collaboration</h1>
                                <p className='px-4'>Collaborated with other developers on making projects.</p>
                                </>
                            ) : work === "Data Entry" ? (
                                <>
                                <img className='mx-auto sm:w-[200px] w-[200px]' src="https://cdn.prod.website-files.com/62f0ce991acf50d5e001981b/64bfd6f1707d2a50a6b4ef47_character-illustration_workflow_core_financial_accounts_payable_light.gif" />
                                <h1 className='text-left text-[30px] font-[600] mt-3 px-4'>Data Entry</h1>
                                <p className='px-4'>Performed data verification and validation to ensure accuracy and completeness.</p>
                                </>
                            ) : work === "NEC" ? (
                                <>
                                <img className='mx-16 sm:w-[200px] w-[200px]' src="https://media.tenor.com/eu1JGalJAoEAAAAi/vote-voting.gif"/>
                                <h1 className='text-left text-[30px] font-[600] mt-3 px-4'>Election Committee</h1>
                                <p className='px-4'>Monitored polling stations to ensure smooth and fair voting operations.</p>
                                </>
                            ) : null}
                            </div>
                </div> 
            </div>
        </section>
    );
}
