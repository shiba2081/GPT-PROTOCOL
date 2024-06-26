'use client'
import Image from "next/image";
// import Hero from '../assets/img/hero1.gif'
// import Hero2 from '../assets/img/hero2.gif'

// import Hero_Mobile from '../assets/img/hero_mobile.gif'

import { useEffect, useRef, useState } from "react";
import '@/app/styles/index.scss'
import './style.scss'
import Card from '@/app/components/Card';
import TemF from "@/app/components/TemF";
import TemS from "@/app/components/TemS";
import TemT from "@/app/components/TemT";
import Slider from "@/app/components/Slider";
import dynamic from 'next/dynamic';
import { motion, useInView} from "framer-motion";
import SliderF from "../components/SliderF";
import Loader from "../components/Loader";


const Icon = dynamic(()=> import('../components/Icons'))



export default function Home() {
  // const controls = useAnimation();
  const [point, setPoint] = useState({ x: 436, y: 242 });
  const [gif1, setGif1] = useState(false)
  const [loading, setLoading] = useState(true)
  const [start, setStart] = useState(false)
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);
  const cardref = useRef(null);
  const inview = useInView(cardref, {once:true})

  
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
  const cardListT = [
    {id:1,title:"Learn",description:"Dive into our quick guides to learn more about the Internet of AI."},
    {id:2,title:"Build",description:"Start crafting your projects with our developer tools."},
    {id:3,title:"Github",description:"Explore our repositories and contribute to open-source."},
    {id:4,title:"Community",description:"Connect, collaborate, and share knowledge with peers."},
  ]
  const images = [
    {image:"Slider1",desc:'Exciting news! "GPT Protocol" joins NVIDIA Developer Program, enhancing our AI tools for users.',url:"https://x.com/craigosullivan/status/1770500267412164720?s=46"},
    {image:"Slider2",desc:'Navigating Regulatory Challenges, Empowering DePin Innovation',url:"https://x.com/gpt_protocol/status/1772709282317754506?s=46"},
    {image:"Slider3",desc:'Stake Your $GPT Today, Earn More with GPT Protocol',url:"https://staking.gptprotocol.org/"}]
  
  useEffect(()=> {
    // setTimeout(()=>{
    //   setStart(true)
    // },400)
    setTimeout(()=>{
      setLoading(false)
    },1000)

    setTimeout(()=>{
      setGif1(true)
    },5500)
  },[])
  
  const openLink = (label) => {
    if (label==="mining") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScfDTx7vwM0bLt-w40hDowXu8CEoVqO3bYPlzMXbyIg8hPt1A/viewform?usp=pp_url")
    }
    else if (label==="building") {
      window.open("/build")
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

  const handleCanPlayThrough = () => {
    setIsVideoReady(true);
    videoRef.current.play();
  };
//   const findmypoint = (event) => {
//     const rect = event.target.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     setPoint({ x, y });
//     console.log(x,y)
// }
// const backTo = () => {
//     const x = 436;
//     const y = 242;
//     console.log("backto")
//     controls.start({ d: `M 10 250 Q ${x} ${y} 980 250`, transition: { type: 'spring', damping: 1, stiffness: 200 } });
    
// }
  return (
    <div style={{position:"relative"}}>

    
    
    {/* <div className={`hero1 ${gif2? "motion":"no-motion"}`}>

    </div>
    <div className={`hero2 ${gif2? "motion":"no-motion"}`}>

    </div> */}
    {/* <div className="hero-shape">
        <div className="hero1"></div>
        <div className="hero2"></div>
        <div className="hero3"></div>
    </div> */}
    {/* {screenSize.width<720 && 
      <div 
    // data-scroll data-scroll-speed="-.8" 
    className="home-container-mobile">
    <>
    <div className="gif">
      <Image src={Hero_Mobile} width={430} height={764} style={{mixBlendMode: "screen"}}/>
    </div>
    <div className="blur-div"></div>
    <div className={`home-heading-mobile`}>
      <div className="home-title mb-80">Censorship-Resistant Intelligence</div>
      <div className="home-desc">Connecting AI developers and miners through Proof of Resources.</div>
      <div className="button-gap">
        <div className="home-button button1">Start Mining </div>
        <div className="home-button button2">Start Building </div>
      </div>
    </div>
    
    
    </>
    </div>
    } */}
    {/* <Loader/> */}
    {screenSize.width===0?
      <Loader/>:screenSize.width<720 &&
      
    <div 
    // data-scroll data-scroll-speed="-.8" 
    className="home-container-mobile1 mobileVideo">
    <>
    <div className="gif">
    <video  width={430} height={764} style={{mixBlendMode: "screen"}} ref={videoRef}
            // onCanPlayThrough={handleCanPlayThrough} 
            autoPlay loop muted playsInline>
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>
      {/* <Image src={Hero_Mobile} width={430} height={764} style={{mixBlendMode: "screen"}}/> */}
    </div>
    <div className="blur-div1"></div>
    <div className="heading-home">
    <div className={`home-heading-mobile1`}>
      <div className="home-title mb-80 ">Censorship-Resistant Intelligence</div>
      <div className="home-desc">Connecting AI developers and miners through Proof of Resources.</div>
      <div className="button-gap">
        <div className="home-button button1 c-p" onClick={()=>openLink("mining")}>Start Mining </div>
        <div className="home-button button2 c-p" onClick={()=>openLink("building")}>Start Building </div>
      </div>
    </div>
    </div>
    
    
    </>
    </div>
    }
    {loading && <Loader/>}
    {screenSize.width===0?
      <Loader/>:screenSize.width>720 &&
      <div 
    // data-scroll data-scroll-speed="-.8" 
    className="home-container desktopVideo">
    <>
    <div className="desktop-gif">
    <div style={{position:"relative"}}>
      {!gif1 && 
        <video  width={1440} height={810} style={{mixBlendMode: "screen",position:"absolute"}} ref={videoRef}
            // onCanPlayThrough={handleCanPlayThrough} 
            autoPlay loop muted playsInline>
          <source src="/hero1.mp4" type="video/mp4" />
        </video>
        }
        <video  width={1440} height={810} style={{mixBlendMode: "screen",opacity: gif1? "1":"0"}} autoPlay loop muted playsInline>
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
      {/* <Image priority={true} src={Hero2} width={1440} height={810} style={{mixBlendMode: "screen",opacity: gif1? "1":"0"}}/> */}
      </div>
    </div>
    <div className={`home-heading ${gif1? "motion":"no-motion"}`}>
      <div className="home-title mb-80 ">Censorship-Resistant Intelligence</div>
      <div className="home-desc">Connecting AI developers and miners through Proof of Resources.</div>
      <div className="button-gap">
        <div className="home-button button1 c-p" onClick={()=>openLink("mining")}>Start Mining <Icon name='arrow-left' fill='#CAFEAE' width={24} height={24} /></div>
        <div className="home-button button2 c-p" onClick={()=>openLink("building")}>Start Building <Icon name='arrow-left' fill='#fff' width={24} height={24} /></div>
      </div>
    </div>
    
    <div className="blur-div"></div>
    </>
    </div>
    }
    
    {/* <Marque/> */}
    <div className="experiment">
    {/* <div 
    // onHoverStart={(e) => console.log('Hover starts',e)} 
    // className='justify-center' ref={ref} 
    // onMouseEnter={(dets)=> findmypoint(dets)}
    style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                backgroundColor: '#070707',
            }}
    onMouseMove={(dets)=> findmypoint(dets)}
    onMouseLeave={()=> backTo()}
    >
    <svg width="100%" height="500" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
    d={`M 10 250 Q ${point.x} ${point.y} 980 250`}
    stroke="white" fill="transparent" animate={controls} key={Math.random()+point.x+point.y}/>
    </svg>
    
    </div> */}
    
    <div 
    // data-scroll data-scroll-speed="-.2"
    >
    
    {/* {screenSize.width>720 &&
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className="cardList">
      {cardList.map((item,index)=> {
              return <Card key={index} img={item.img} title={item.title} description={item.description}/>
              })}
    </motion.div>} */}
    
    </div>
    <div className="background1">
    <div className="temp1 card-first">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ease:[0.76, 0, 0.24, 1],duration: .2}}
      className="justify-center text-36 mb-32 mt-60 t-align-center" ref = {cardref}>Designed for Trusted Automation</motion.div>
    {/* {screenSize.width<720 && */}
          <SliderF inview={inview} images={cardList} child={"first"} width={screenSize.width}/>
      {/* } */}
    </div>
    <div className="temp1">
      <Slider images={images} child={"second"} width={screenSize.width}/>
    </div>
    </div>
    <div 
    // data-scroll data-scroll-speed="-.4" 
    className="temp1 mt-160 mb-80 background2 ">
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
    <div className="card-second ">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ease:[0.76, 0, 0.24, 1],duration: .2}} className="text-52 mb-60 mt-80">A Scalable and Secure AI Blockchain</motion.div>
        
        <TemS/>
    </div>
    <div className="card-third ">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ease:[0.76, 0, 0.24, 1],duration: .2}} className="text-52 mb-60 mt-292">Resources</motion.div>
    {screenSize.width>720 ?
    <TemT/>:
    <SliderF images={cardListT} child={"third"} width={screenSize.width}/>
    }
    </div>
    </div>
    </div>
  );
}
