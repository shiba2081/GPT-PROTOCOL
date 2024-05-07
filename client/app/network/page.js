'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Network/network1.gif'
import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import Card from '@/app/components/Card';
import TemF from "@/app/components/TemF";
import CardS from "@/app/components/CardS";
import CardT from "@/app/components/CardT";
import CardF from "@/app/components/CardF";
import '@/app/styles/index.scss'
import './style.scss'
import TemB from "../components/TemB";
import TemN from "../components/TemN";


export default function Network() {
  const cardsList1 = [
    {id:1,title:"Block Explorer",
    description:[""]},
    {id:2,title:"Client",
    description:[""]},
    {id:3,title:"Dashboard",
    description:[""]},
  ]
  return (
    <div style={{position:"relative"}}>
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
    
    
    </div>
    <div className="experiment">
    <div className="justify-center text-40 mb-62">Statistics: Real-time network data</div>
    <div className="tempb">
      <TemB cardsList={cardsList1}/>
    </div>
    <div className="justify-center text-48 mb-62 mt-120">Governance</div>
    <div className="temp1">
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
    <div className="justify-center text-48 mb-62 mt-120">Security: Measures for Network Integrity</div>
    <div className="temp1">
      <TemN child={"second"}/>
    </div>
    
    </div>
    </div>
  );
}
