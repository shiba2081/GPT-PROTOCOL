'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Network/network1.gif'
import '@/app/styles/index.scss'
import './style.scss'
import TemB from "../components/TemB";
import TemN from "../components/TemN";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";


export default function Network() {
  const cardsList1 = [
    {id:1,title:"Block Explorer",
    description:[""]},
    {id:2,title:"Client",
    description:[""]},
    {id:3,title:"Dashboard",
    description:[""]},
  ]

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
    <Image src={Hero} width={400} height={400} style={{mixBlendMode: "lighten"}}/>
    </div>
    <div className="home-heading-mobile">
      <div className="home-title mb-32">Network</div>
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
    <Image src={Hero} width={540} height={540} style={{mixBlendMode: "lighten"}}/>
    </div>
    <div className="home-heading">
      <div className="home-title mb-32">Network</div>
      <div className="home-desc">Delve into real-time statistics, community-driven governance, and security measures designed to uphold network integrity. Participate in our democratic decision-making process through token-based voting and community proposals. Join us in shaping the evolution of our network towards a decentralized future where every voice matters.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    
    <div className="experiment">
    
    <div className="tempb">
    <div className="justify-center text-40 mb-62">Statistics: Real-time network data</div>
      <TemB cardsList={cardsList1}/>
    </div>
    
    <div className="temp1">
    <div className="justify-center text-48 mb-62 mt-120">Governance</div>
      <TemN child={"first"}/>
    </div>
    <div className="card-second">
    <div className='card-default card-extra'>
      <div className="card-extra-desc">
      Be part of an AI governance system where your voice matters. Our decision-making process is guided by a community-driven, token-based voting system, ensuring every participant can contribute to the network's evolution and policy-making.
      </div>
      <div className="home-button button3">Join Now</div>
    </div>
    </div>
    
    <div className="temp1">
    <div className="justify-center text-48 mb-62 mt-120">Security: Measures for Network Integrity</div>
      <TemN child={"second"}/>
    </div>
    
    </div>
    </div>
  );
}
