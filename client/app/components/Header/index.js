'use client'
import './style.scss'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion, Variants } from "framer-motion";
const Icon = dynamic(()=> import('../Icons'))
 


export default function Header() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const [tab, setTab] = useState('')
  const [active, setActive] = useState('')

  const navigateTo = (nav) => {
    localStorage.setItem("nav",nav)
    setTab(nav)
    setIsOpen(false)
    router.push("/"+nav)
  }
  const whitepaper = () => {
    window.open('/GPT-Protocol-Whitepaper-v2.0.pdf','_blank')
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  }
  useEffect(()=> {
    if(typeof window !== "undefined" ) {
      setActive(localStorage.getItem("nav"));
      setTab(localStorage.getItem("nav"));
    }
    
  },[])
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
  };

  return (
    <div className='header'>
        <div onClick={()=> navigateTo('/')} style={{cursor:"pointer"}}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}><Icon name='header' fill={isHovered? "#83ff31":"#fff"} width={74} height={24} /></div>
        { screenSize.width<720 ?
        <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
        >
        <div
        style={{cursor:"pointer"}}
        // whileTap={{ scale: 0.97 }}
        // onClick={() => setIsOpen(!isOpen)}
        >
        <svg
          viewBox="0 0 50 50"
          width="50"
          height="50"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleMenu}
        >
          {/* Menu icon paths */}
          <path d="M10 15H40" stroke="white" strokeWidth="3" style={{ opacity: isOpen ? '0' : '1' }}/>
          <path d="M10 25H40" stroke="white" strokeWidth="3" style={{ opacity: isOpen ? '0' : '1' }}/>
          <path
            d="M10 35H40"
            stroke="white"
            strokeWidth="3"
            style={{ transition: 'all 0.3s ease', opacity: isOpen ? '0' : '1' }}
          />

          {/* Cross icon paths (hidden initially) */}
          <path
            d="M10 15L40 35"
            stroke="white"
            strokeWidth="3"
            style={{ opacity: isOpen ? '1' : '0' }}
          />
          <path
            d="M10 35L40 15"
            stroke="white"
            strokeWidth="3"
            style={{ opacity: isOpen ? '1' : '0' }}
          />
        </svg>
        </div>
          <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05
              }
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
              }
            }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants} className={`nav ${tab==='learn' && "active"}`} onClick={()=> navigateTo('learn')}>Learn</motion.li>
          <motion.li variants={itemVariants} className={`nav ${tab==='build' && "active"}`} onClick={()=> navigateTo('build')}>Build</motion.li>
          <motion.li variants={itemVariants} className={`nav ${tab==='solution' && "active"}`} onClick={()=> navigateTo('solution')}>Solution</motion.li>
          <motion.li variants={itemVariants} className={`nav ${tab==='network' && "active"}`} onClick={()=> navigateTo('network')}>Network</motion.li>
          <motion.li variants={itemVariants} className={`nav ${tab==='community' && "active"}`} onClick={()=> navigateTo('community')}>Community</motion.li>
          <motion.li variants={itemVariants} className='nav' onClick={()=> whitepaper()}>Whitepaper</motion.li>
          <motion.li variants={itemVariants} ><div className='ask'>Ask GPT</div></motion.li>
          </motion.ul>
          
        </motion.div>
        :
        <>
        <div className='navigation'>
            <div className={`nav ${tab==='learn' && "active"}`} onClick={()=> navigateTo('learn')}>Learn</div>
            <div className={`nav ${tab==='build' && "active"}`} onClick={()=> navigateTo('build')}>Build</div>
            <div className={`nav ${tab==='solution' && "active"}`} onClick={()=> navigateTo('solution')}>Solution</div>
            <div className={`nav ${tab==='network' && "active"}`} onClick={()=> navigateTo('network')}>Network</div>
            <div className={`nav ${tab==='community' && "active"}`} onClick={()=> navigateTo('community')}>Community</div>
            <div className='nav' onClick={()=> whitepaper()}>Whitepaper</div>
        </div>
        <div className='ask'>Ask GPT</div>
        </>
        }
        <div className='scroll-top' style={{cursor:"pointer"}}
        onClick={()=>scrollToTop()}
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}><Icon name='up-arrow' fill={isHovered1? "#fff":"#83ff31"} width={24} height={24} /></div>
    </div>
  );
}
