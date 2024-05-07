'use client'
import './style.scss'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
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
  return (
    <div className='header'>
        <div onClick={()=> navigateTo('/')} style={{cursor:"pointer"}}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}><Icon name='header' fill={isHovered? "#83ff31":"#fff"} width={74} height={24} /></div>
        <div className='navigation'>
            <div className={`nav ${tab==='learn' && "active"}`} onClick={()=> navigateTo('learn')}>Learn</div>
            <div className={`nav ${tab==='build' && "active"}`} onClick={()=> navigateTo('build')}>Build</div>
            <div className={`nav ${tab==='solution' && "active"}`} onClick={()=> navigateTo('solution')}>Solution</div>
            <div className={`nav ${tab==='network' && "active"}`} onClick={()=> navigateTo('network')}>Network</div>
            <div className={`nav ${tab==='community' && "active"}`} onClick={()=> navigateTo('community')}>Community</div>
            <div className='nav' onClick={()=> whitepaper()}>Whitepaper</div>
        </div>
        <div className='ask'>Ask GPT</div>
        <div className='scroll-top' style={{cursor:"pointer"}}
        onClick={()=>scrollToTop()}
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}><Icon name='up-arrow' fill={isHovered1? "#fff":"#83ff31"} width={24} height={24} /></div>
    </div>
  );
}
