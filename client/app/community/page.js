'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Community/community1.gif'

import Horse from '@/app/assets/img/Community/horse.png'
import Horse1 from '@/app/assets/img/Community/horse1.png'

import Global from '@/app/assets/img/Community/global.png'
import Global1 from '@/app/assets/img/Community/global1.png'

import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import './style.scss'
import CardN from "../components/CardN";
import Loader from "../components/Loader";

export default function Community() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const cardList = [
    {label:"Discord"},
    {label:"Telegram"},
    {label:"Whatsapp"},
    {label:"Twitter"}
  ]

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
    <Image src={Hero} width={400} height={400} style={{mixBlendMode: "screen"}}/>
    </div>
    <div className="home-heading-mobile">
      <div className="home-title mb-32">Community</div>
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
    <Image src={Hero} width={540} height={540} style={{mixBlendMode: "screen"}}/>
    </div>
    <div className="home-heading">
      <div className="home-title mb-32">Community</div>
      <div className="home-desc">Delve into real-time statistics, community-driven governance, and security measures designed to uphold network integrity. Participate in our democratic decision-making process through token-based voting and community proposals. Join us in shaping the evolution of our network towards a decentralized future where every voice matters.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    
    <div className="experiment">
      <div className="justify-center text-40 mb-62">Join Us</div>
      <div className="card-second cardC">
        {
          cardList.map((item)=> {
            return <CardN item={item} child={"second"}/>
          })
        }
      </div>
      <div className="justify-center text-40 mb-62 mt-120">Buy $GPT</div>
      <div className="card-second cardC-buy">
        <div
        style={{cursor:"pointer"}}
        onClick={()=>openLink("uniSwap")}
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}>{isHovered?<Image src={Horse1} width={160} height={160}/>:<Image src={Horse} width={160} height={160}/>}</div>
        <div
        style={{cursor:"pointer"}}
        onClick={()=>openLink("mexc")}
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}>{isHovered1?<Image src={Global1} width={160} height={160}/>:<Image src={Global} width={160} height={160}/>}</div>
      </div>
    </div>
    </div>
  );
}
