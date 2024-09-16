import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from "../data";
import { motion } from 'framer-motion';

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return (
    <nav className='fixed'>
      <div className="bg-transparent w-[1400px] py-[30px]">
        <div className="flex items-center gap-[50px]">
        <Link 
        to="/" 
        className="text-[45px] font-[800] leading-3 tracking-wide"           
        onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
          >
            Goros</Link>

            <ul className=' flex gap-[20px]'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? 
                "text-white border-b-4 border-blue-600 duration-200"
                : 
                "text-white "
              } text-[20px]`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
          </div>           
        </div>
    </nav>
  )
}
