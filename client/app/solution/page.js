'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import TemF from "@/app/components/TemF";
import './style.scss'
import Loader from "../components/Loader";

export default function Solution() {

  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined'? window.innerWidth:0,
    height: typeof window !== 'undefined'? window.innerHeight:0,
  });

  const openLink = (label) => {
    if (label==="miner") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScTQfHHwqTzQT7DjknklaAdkap6txp_NYvsrNhD0uPlptd-Gg/viewform")
    }
  }

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
          <source src="/solution.mp4" type="video/mp4" />
    </video>
    {/* <Image src={Hero} width={400} height={400} style={{mixBlendMode: "screen"}}/> */}
    </div>
    <div className="home-heading-mobile">
      <div className="home-title mb-32 oxygen-text">Solution</div>
      <div className="home-desc">Discover how we're shaping the future of decentralized AI through mining opportunities and collaborative partnerships. Join our global miner community, explore collaborative ventures, and embrace decentralized innovation. Let's shape tomorrow together.</div>
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
          <source src="/solution.mp4" type="video/mp4" />
    </video>
    {/* <Image src={Hero} width={540} height={540} style={{mixBlendMode: "screen"}}/> */}
    </div>
    <div className="home-heading">
      <div className="home-title mb-32 oxygen-text">Solution</div>
      <div className="home-desc">Discover how we're shaping the future of decentralized AI through mining opportunities and collaborative partnerships. Join our global miner community, explore collaborative ventures, and embrace decentralized innovation. Let's shape tomorrow together.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    <div className="experiment jakarta-text">
      
      <div className="temp1">
      <div className="justify-center text-48 mb-62">Miners</div>
        <TemF ch="third"/>
        <div className="temp-default">
        <div className="miner" style={{fontSize:"24px",color:"#E3E3E3",marginBottom:"40px"}}>Join our miner community and turn your computational resources into rewards. Stake tokens, contribute to AI processing, and become a vital part of a pioneering decentralized network. Start mining today and be at the forefront of blockchain and AI innovation. </div>
        <div className="home-button button1 c-p" onClick={()=>{openLink("miner")}}>Become a Miner</div>
        </div>
      </div>
      
      <div className="temp1">
      <div className="justify-center text-48 mb-62 mt-32">Developers</div>
        <TemF ch="fourth"/>
      </div>
      
      <div className="temp1">
      <div className="justify-center text-48 mb-62 mt-32">Partnerships</div>
        <TemF ch="fifth"/>
      </div>
    </div>
    </div>
  );
}
