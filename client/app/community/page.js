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

export default function Community() {
  const [isHovered, setIsHovered] = useState(false)
  const [isHovered1, setIsHovered1] = useState(false)
  const cardList = [
    {label:"Discord"},
    {label:"Telegram"},
    {label:"Whatsapp"},
    {label:"Twitter"}
  ]
  return (
    <div style={{position:"relative"}}>
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
    
    
    </div>
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
        onMouseEnter={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}>{isHovered?<Image src={Horse1} width={160} height={160}/>:<Image src={Horse} width={160} height={160}/>}</div>
        <div
        onMouseEnter={()=> setIsHovered1(true)}
        onMouseLeave={()=> setIsHovered1(false)}>{isHovered1?<Image src={Global1} width={160} height={160}/>:<Image src={Global} width={160} height={160}/>}</div>
      </div>
    </div>
    </div>
  );
}
