'use client'
import Image from "next/image";
import Hero from '../assets/img/hero1.gif'
import Hero2 from '../assets/img/hero2.png'
import Hero3 from '../assets/img/hero3.gif'

import mining from '@/app/assets/img/Home/mining.gif'

import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import './style.scss'
import Card from '@/app/components/Card';
import TemF from "@/app/components/TemF";
import CardT from "@/app/components/CardT";
import CardF from "@/app/components/CardF";
import TemS from "@/app/components/TemS";
import TemT from "@/app/components/TemT";
import Slider from "@/app/components/Slider";
import dynamic from 'next/dynamic';
import Marque from "@/app/components/marque";
import { motion, useMotionValue, useTransform } from "framer-motion";


const Icon = dynamic(()=> import('../components/Icons'))

export default function Home() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  const [gif1, setGif1] = useState(false)
  const [gif2, setGif2] = useState(false)
  const cardList = [
    {
      img:"card1",
      title: "EVM Compatibility",
      description: "EVM-equivalence means compatibility with current Ethereum tools and access to a greater network of  liquidity and developers."
    },
    {
      img:"card2",
      title: "Open-Source Codebase",
      description: "Leverage our set of customizable open source AI applications to deploy your own on-chain AI models in minutes."
    },
    {
      img:"card3",
      title: "Verify your AI Data",
      description: "Enhance your AI data value by using advanced zkProving technology for off-chain data verification."
    },
    {
      img:"card4",
      title: "Earn Rewards",
      description: "Miners receive rewards for providing affordable AI computing power to open source AI developers."
    },
  ]
  useEffect(()=> {
    setTimeout(()=>{
      setGif1(true)
    },1830)
    setTimeout(()=> {
      setGif1(false)
      setGif2(true)
    },3230)
  },[])
  return (
    <div style={{position:"relative"}}>
    <div 
    // data-scroll data-scroll-speed="-.8" 
    className="home-container">
    {/* <div className={`hero1 ${gif2? "motion":"no-motion"}`}>

    </div>
    <div className={`hero2 ${gif2? "motion":"no-motion"}`}>

    </div> */}
    {/* <div className="hero-shape">
        <div className="hero1"></div>
        <div className="hero2"></div>
        <div className="hero3"></div>
    </div> */}
    <div className="gif">
      {gif1? <Image priority={true} src={Hero2} width={1440} height={810} style={{mixBlendMode: "screen"}}/>:gif2? <Image src={Hero3} width={1440} height={810} style={{mixBlendMode: "screen"}}/>:<Image priority={true} src={Hero} width={1440} height={810} style={{mixBlendMode: "screen"}}/>}
    </div>
    <div className={`home-heading ${gif2? "motion":"no-motion"}`}>
      <div className="home-title mb-80">Censorship-Resistant Intelligence</div>
      <div className="home-desc">Connecting AI developers and miners through Proof of Resources.</div>
      <div className="button-gap">
        <div className="home-button button1">Start Mining <Icon name='arrow-left' fill='#CAFEAE' width={24} height={24} /></div>
        <div className="home-button button2">Start Building <Icon name='arrow-left' fill='#fff' width={24} height={24} /></div>
      </div>
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>
    {/* <Marque/> */}
    <div className="experiment">
    
    
    {/* <iframe src="https://player.vimeo.com/video/940693289?h=9aa6937a7f&autoplay=1&muted=1" width="640" height="268" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
    <div 
    // data-scroll data-scroll-speed="-.2"
    >
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}}
 className="justify-center text-36 mb-32 mt-60">Designed for Trusted Automation</motion.div>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className="cardList">
    {cardList.map((item)=> {
    return <Card img={item.img} title={item.title} description={item.description}/>
    })}
    </motion.div>
    </div>
    <div className="temp1" style={{padding:"0 100px"}}>
      <Slider/>
    </div>
    <div 
    // data-scroll data-scroll-speed="-.4" 
    className="temp1 mt-160 mb-80">
    {/* <div className="hero-shape">
        <div className="hero1"></div>
        <div className="hero2"></div>
        <div className="hero3"></div>
    </div> */}
    <TemF ch="first"/>
    <TemF ch="second"/>
    </div>
    {/* <div className="temp1">
    <Image src={mining} layout="fill" style={{mixBlendMode: "screen"}}/>
    </div> */}
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className="text-52 mb-60 mt-80 pl-100">A Scalable and Secure AI Blockchain</motion.div>
    <div className="card-second">
    <TemS/>
    </div>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className="text-52 mb-60 mt-292 pl-100">Resources</motion.div>
    <div className="card-third plr-100">
    <TemT/>
    </div>
    </div>
    </div>
  );
}
