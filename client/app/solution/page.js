'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Solution/solution1.gif'
import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import TemF from "@/app/components/TemF";
import './style.scss'

export default function Solution() {

  return (
    <div style={{position:"relative"}}>
    <div className="home-container common">
    <div className="gif">
    <Image src={Hero} width={540} height={540} style={{mixBlendMode: "screen"}}/>
    </div>
    <div className="home-heading">
      <div className="home-title mb-32">Solution</div>
      <div className="home-desc">Discover how we're shaping the future of decentralized AI through mining opportunities and collaborative partnerships. Join our global miner community, explore collaborative ventures, and embrace decentralized innovation. Let's shape tomorrow together.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>
    <div className="experiment">
      <div className="justify-center text-48 mb-62">Miners</div>
      <div className="temp1">
        <TemF ch="third"/>
        <div className="temp1" style={{padding:"120px 100px 120px 100px"}}>
        <div className="miner" style={{fontSize:"24px",color:"#E3E3E3",marginBottom:"40px"}}>Join our miner community and turn your computational resources into rewards. Stake tokens, contribute to AI processing, and become a vital part of a pioneering decentralized network. Start mining today and be at the forefront of blockchain and AI innovation. </div>
        <div className="home-button button1">Become a Miner</div>
        </div>
      </div>
      <div className="justify-center text-48 mb-62">Developers</div>
      <div className="temp1">
        <TemF ch="fourth"/>
      </div>
      <div className="justify-center text-48 mb-62">Partnerships</div>
      <div className="temp1">
        <TemF ch="fifth"/>
      </div>
    </div>
    </div>
  );
}
