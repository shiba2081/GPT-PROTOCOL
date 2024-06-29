'use client'
import './style.scss'
import { usePathname, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion, Variants } from "framer-motion";
const Icon = dynamic(()=> import('../Icons'))
 


export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const [tab, setTab] = useState('')
  const [active, setActive] = useState('')
  const [isVisible, setIsVisible] = useState(false);

  const navigateTo = (nav) => {
    // sessionStorage.setItem("nav",nav)
    setTab(nav)
    setIsOpen(false)
    router.push("/"+nav)
  }

  const openLink = (label) => {
    if (label==="ask") {
      window.open("https://assistant.gptprotocol.io")
    }
    else if (label==="buy") {
      navigateTo('community?buy=gpt')
    }
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
    console.log(pathname)
    if (pathname && pathname !== "/") {
      setActive(pathname.slice(1,));
      setTab(pathname.slice(1,));
    }
    // if(typeof window !== "undefined" ) {
    //   setActive(sessionStorage.getItem("nav"));
    //   setTab(sessionStorage.getItem("nav"));
    // }
    
  },[])
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (scrollDirection === 'down') {
      setHidden(true);
    } else if (scrollDirection === 'up') {
      setHidden(false);
    }
  }, [scrollDirection]);

  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', toggleVisibility);
    };
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
    <div className={`header ${hidden? "hidden":""}`}>
        <div
        className="mobile" onClick={()=> navigateTo('/')} style={{cursor:"pointer",position:"relative",zIndex:"101"}}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}><Icon name='header-mobile' fill={isHovered? "#83ff31":"#fff"} width={43} height={14} /></div>

        {/* { screenSize.width<720 ? */}
        <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu mobile"
        >
        <div
        
        className='cancel'
        // whileTap={{ scale: 0.97 }}
        // onClick={() => setIsOpen(!isOpen)}
        >
        <svg
          viewBox="0 0 18 15"
          width="18"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          style={{cursor:"pointer"}}
          onClick={toggleMenu}
        >
          {/* Menu icon paths */}
          <path d="M1 1.25H17" stroke="white" strokeWidth="1.5" stroke-linecap="round" style={{ opacity: isOpen ? '0' : '1' }}/>
          <path d="M1 7.25H17" stroke="white" strokeWidth="1.5" stroke-linecap="round" style={{ transition: 'all 0.2s ease', opacity: isOpen ? '0' : '1' }}/>
          <path
            d="M1 13.25H17"
            stroke="white"
            strokeWidth="1.5"
            stroke-linecap="round"
            style={{ opacity: isOpen ? '0' : '1' }}
          />

          {/* Cross icon paths (hidden initially) */}
          <path
            d="M3.34326 1.34277L14.657 12.6565"
            stroke="white"
            strokeWidth="1.5"
            stroke-linecap="round"
            style={{ opacity: isOpen ? '1' : '0' }}
          />
          <path
            d="M3.34326 12.6572L14.657 1.34352"
            stroke="white"
            strokeWidth="1.5"
            stroke-linecap="round"
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
          <motion.li variants={itemVariants} onClick={()=>openLink("buy")}><div className='ask c-p'>Buy $GPT</div></motion.li>
          <motion.li variants={itemVariants} onClick={()=>openLink("ask")}><div className='ask c-p'>GPT Assistant</div></motion.li>
          </motion.ul>
          
        </motion.div>
        <div className='flex gap-56'>
        <div 
        className="desktop" onClick={()=> navigateTo('/')} style={{cursor:"pointer",position:"relative",zIndex:"101"}}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}><Icon name='header' fill={isHovered? "#83ff31":"#fff"} width={74} height={25} /></div>
        
        {/* : */}
        <div className='desktop'>
        <div className='navigation'>
            <div className={`nav ${tab==='learn' && "active"}`} onClick={()=> navigateTo('learn')}>Learn</div>
            <div className={`nav ${tab==='build' && "active"}`} onClick={()=> navigateTo('build')}>Build</div>
            <div className={`nav ${tab==='solution' && "active"}`} onClick={()=> navigateTo('solution')}>Solution</div>
            <div className={`nav ${tab==='network' && "active"}`} onClick={()=> navigateTo('network')}>Network</div>
            <div className={`nav ${tab==='community' && "active"}`} onClick={()=> navigateTo('community')}>Community</div>
            <div className='nav' onClick={()=> whitepaper()}>Whitepaper</div>
        </div>
        
        </div>
        </div>
        <div className='flex gap-16'>
        <div className='ask c-p desktop' onClick={()=>openLink("buy")}>Buy $GPT</div>
        <div className='ask c-p desktop' onClick={()=>openLink("ask")}>GPT Assistant</div>
        </div>
        {/* } */}
        {screenSize.height!==0 && <div className={`scroll-top ${isVisible? "a-v":"a-n"}`} style={{cursor:"pointer", top:`${screenSize.height-74}px`}}
        onClick={()=>scrollToTop()}
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}><Icon name='up-arrow' fill={isHovered1? "#fff":"#83ff31"} width={24} height={24} /></div>}
    </div>
  );
}
