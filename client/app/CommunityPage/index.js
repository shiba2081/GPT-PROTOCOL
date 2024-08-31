'use client'
import Image from "next/image";
import Calendar from 'react-awesome-calendar';

import Horse from '@/app/assets/img/Community/horse.png'
import Horse1 from '@/app/assets/img/Community/horse1.png'

import Global from '@/app/assets/img/Community/global.png'
import Global1 from '@/app/assets/img/Community/global1.png'

import { useEffect, useRef, useState } from "react";
import '@/app/styles/index.scss'
import './style.scss'
import CardN from "../components/CardN";
import Loader from "../components/Loader";
import { motion, useInView } from "framer-motion";


export default function Community() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const cardref9 = useRef(null);
  const inview9 = useInView(cardref9, {once:true})
  const cardref10 = useRef(null);
  const inview10 = useInView(cardref10, {once:true})
  const cardList = [
    {label:"Discord"},
    {label:"Telegram"},
    {label:"Whatsapp"},
    {label:"Twitter"}
  ]
  const events = [{
    id: 1,
    color: '#245a00',
    from: '2024-09-07T18:00:00+00:00',
    to: '2024-09-07T19:00:00+00:00',
    title: 'Wiki Finance Expo Bangkok 2024'
}, 
{
    id: 2,
    color: '#245a00',
    from: '2024-09-09T13:00:00+00:00',
    to: '2024-09-11T13:00:00+00:00',
    title: 'FinovateFall'
}, 
// {
//     id: 3,
//     color: '#245a00',
//     from: '2024-08-05T13:00:00+00:00',
//     to: '2024-08-05T20:00:00+00:00',
//     title: 'This is also another event'
// }
];

  const openLink = (label) => {
    if (label==="uniSwap") {
      window.open("https://app.uniswap.org/swap?&chain=mainnet&outputCurrency=0xCdb4A8742ed7D0259b51E3454C46C9D6C48d5e88")
    } else if (label==="mexc") {
      window.open("https://www.mexc.com/exchange/GPT_USDT")
    } 
  }

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined'? window.innerWidth:0,
    height: typeof window !== 'undefined'? window.innerHeight:0,
  });
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('buy');
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
      }
    }
  }, []);

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
  
  return (
    <div style={{position:"relative"}}>
    {screenSize.width===0?
      <Loader/>:screenSize.width<720 &&
      
      <div className="home-container-mobile common">
    <div className="gif">
    <video width={400} height={400} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline>
          <source src="/community.mp4" type="video/mp4" />
    </video>
    {/* <Image src={Hero} width={400} height={400} style={{mixBlendMode: "screen"}}/> */}
    </div>
    <div className="home-heading-mobile">
      <div className="home-title mb-32 ">Community</div>
      <div className="home-desc">Delve into real-time statistics, community-driven governance, and security measures designed to uphold network integrity. Participate in our democratic decision-making process through token-based voting and community proposals. Join us in shaping the evolution of our network towards a decentralized future where every voice matters.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    {screenSize.width===0?
      <Loader/>:screenSize.width>720 &&
      <div className="home-container common">
    <div className="gif">
    <video width={540} height={540} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline>
          <source src="/community.mp4" type="video/mp4" />
    </video>
    {/* <Image src={Hero} width={540} height={540} style={{mixBlendMode: "screen"}}/> */}
    </div>
    <div className="home-heading">
      <div className="home-title mb-32 ">Community</div>
      <div className="home-desc">Delve into real-time statistics, community-driven governance, and security measures designed to uphold network integrity. Participate in our democratic decision-making process through token-based voting and community proposals. Join us in shaping the evolution of our network towards a decentralized future where every voice matters.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    
    <div className="experiment ">
      <div className="justify-center text-40 mb-62" ref={cardref9}>Join Us</div>
      <div className="card-second cardC">
        {
          cardList.map((item)=> {
            return <CardN item={item} child={"second"} inview={inview9}/>
          })
        }
      </div>
      <div className="justify-center text-40 mb-62 mt-120" ref={cardref9}>Upcoming Events</div>
      <div className="card-second">
      <Calendar
                events={events}
            />
      </div>
      <div id='gpt' className="justify-center text-40 mb-62 mt-120" ref={cardref10}>Buy $GPT</div>
      <div className="card-second cardC-buy">
      <motion.div
          initial={{ scale:0 }}
          animate={inview10? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          }}
        style={{cursor:"pointer"}}
        onClick={()=>openLink("uniSwap")}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}>{isHovered?<Image src={Horse1} width={160} height={160}/>:<Image src={Horse} width={160} height={160}/>}

        </motion.div>
        <motion.div
          initial={{ scale:0 }}
          animate={inview10? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          }}
        style={{cursor:"pointer"}}
        onClick={()=>openLink("mexc")}
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}>{isHovered1?<Image src={Global1} width={160} height={160}/>:<Image src={Global} width={160} height={160}/>}

        </motion.div>
      </div>
      
    </div>
    </div>
  );
}
