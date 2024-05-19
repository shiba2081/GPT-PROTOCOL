'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Build/build1.gif'
import '@/app/styles/index.scss'
import './style.scss'
import TemB from "../components/TemB";
import BigCard from "../components/BigCard";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import BigCard2 from "../components/BigCard2";

export default function Build() {
  const cardsList1 = [
    {id:1,title:"Documentation",
    description:["System Requirements","APIs","Hardware"]},
    {id:2,title:"Github",
    description:["Learn More"]},
    {id:3,title:"Testnet",
    description:["Block Explorer","Bridge","Faucet"]},
  ]
  const cardsList2 = [
    {id:1,title:"Join Discord",
    description:["Get immediate access to a community of developers and real-time support."]},
    {id:2,title:"Github Issues",
    description:["Report bugs, suggest features, and contribute to discussions on code development."]},
  ]
  const cardsList3 = [
    {id:1,title:"GPT Assistant",
    description:["Run Prompt"]},
    {id:2,title:"GPT Genesis 3D",
    description:["Let's Create"]},
    {id:3,title:"GPT Mining",
    description:["Dashboard","Reward System","More..."]},
  ]
  const cardsList4 = [
    {id:1,title:"Q1+2 - MVP of GPT Genesis 3D",
    description:"Demonstrate text-to-3D generation of on-chain digital artifacts.",top:"332px"},
    {id:2,title:"Q3 - Launch of Mainnet + Initial DePin Testnet",
    description:"Enable AI projects and tokens to launch on our blockchain.",top:"685px"},
  ]
  const cardsList5 = [
    {id:1,title:"Q1 - MVP of GPT Assistant",
    description:"Demonstrate on-chain and token-gated generative AI use cases.",
    top:"160px"},
    {id:2,title:"Q2 - Launch of Skopje Testnet + GPT Assistant v1.0 Alpha",
    description:"Release consumer-ready decentralized application (DApp), pioneering the integration of open-source AI applications with transparent data display.",
    top:"513px"},
    {id:3,title:"Q4 - Launch of Mining",
    description:"Fully operational grid computing with operators and workers on our AI + DePin network.",
    top:"867px"},
  ]
  const cardsList6 = [
    {id:1,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",
    top:"332px"},
    {id:2,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",
    top:"685px"},
    {id:3,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",
    top:"1038px"},
  ]
  const cardsList7 = [
    {id:1,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"160px"},
    {id:2,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"513px"},
    {id:3,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"866px"},
  ]
  const cardsList8 = [
    {id:1,title:"GPT Bounty Program",
    description:["Earn incentives for improving and expanding the GPT ecosystem."]},
    {id:2,title:"AI Training",
    description:["Help train AI models and strengthen the protocol's intelligence. (Coming Soon)"]},
  ]
  const cardsList9 = [
    {id:1,title:"Q1 - MVP of GPT Assistant",
    description:"Demonstrate on-chain and token-gated generative AI use cases.",
    top:"43px"},
    {id:2,title:"Q1+2 - MVP of GPT Genesis 3D",
    description:"Demonstrate text-to-3D generation of on-chain digital artifacts.",top:"132px"},
    {id:3,title:"Q2 - Launch of Skopje Testnet + GPT Assistant v1.0 Alpha",
    description:"Release consumer-ready decentralized application (DApp), pioneering the integration of open-source AI applications with transparent data display.",
    top:"218px"},
    {id:4,title:"Q3 - Launch of Mainnet + Initial DePin Testnet",
    description:"Enable AI projects and tokens to launch on our blockchain.",top:"364px"},
    {id:5,title:"Q4 - Launch of Mining",
    description:"Fully operational grid computing with operators and workers on our AI + DePin network.",
    top:"457px"},
  ]
  const cardsList10 = [
    {id:1,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"41px"},
    {id:2,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"128px"},
    {id:3,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"215px"},
    {id:1,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"301px"},
    {id:2,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"387px"},
    {id:3,title:"Heading Title",
    description:"Sub Title fot Join Discord For Example text are System Requirements",top:"472px"},
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
    <Image src={Hero} width={400} height={400} style={{mixBlendMode: "screen"}}/>
    </div>
    <div className="home-heading-mobile">
      <div className="home-title mb-32">Build</div>
      <div className="home-desc">Find essential resources like API documentation, Github repositories, and tools for both Testnet and Mainnet. Dive into our project showcase, participate in the Bounty Program, and access comprehensive support for development issues to advance your development projects on our decentralized AI platform.</div>
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
      <div className="home-title mb-32">Build</div>
      <div className="home-desc">Find essential resources like API documentation, Github repositories, and tools for both Testnet and Mainnet. Dive into our project showcase, participate in the Bounty Program, and access comprehensive support for development issues to advance your development projects on our decentralized AI platform.</div>
      {/* <div className="button-gap">
        <div className="home-button button1">Blockchain & AI Basics</div>
        <div className="home-button button2">Start Building</div>
      </div> */}
    </div>
    
    <div className="blur-div"></div>
    
    
    </div>}
    <div className="experiment">
    
    <div className="tempb">
    <div className="justify-center text-40 mb-62">Developer Tools</div>
      <TemB cardsList={cardsList1}/>
    </div>
    
    <div className="tempb">
    <div className="justify-center text-40 mb-62 mt-120">Support Channels</div>
      <TemB cardsList={cardsList2} animation="no"/>
    </div>
    <div className="tempb">
    <div className="justify-center text-40 mb-62 mt-120">Our Products</div>
      <TemB cardsList={cardsList3}/>
    </div>
    
    <div className="tempb">
    <div className="justify-center text-40 mb-62 mt-120">Technical Roadmap</div>
      {screenSize.width>720? <BigCard cardsList={cardsList4} cardsList1={cardsList5} heading={"2024 (Q1-Q4)"}/>:<BigCard2 cardsList1={cardsList9} heading={"2024 (Q1-Q4)"}/>}
    </div>

    {/* <div className="tempb mt-60">
    {screenSize.width>720? <BigCard cardsList={cardsList6} cardsList1={cardsList7} heading={"2025 (Q1-Q4)"}/>:<BigCard2 cardsList1={cardsList10} heading={"2025 (Q1-Q4)"}/>}
    </div> */}
    
    <div className="tempb">
    <div className="justify-center text-40 mb-62 mt-120">Contribution Guide</div>
      <TemB cardsList={cardsList8} animation="no"/>
    </div>

    </div>
    </div>
  );
}
