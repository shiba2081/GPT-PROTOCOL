'use client'
import Image from "next/image";
import Hero from '@/app/assets/img/Learn/learn1.gif'
import Arch from '@/app/assets/img/Learn/Arch_PNG.png'
import { useEffect, useState } from "react";
import '@/app/styles/index.scss'
import './style.scss'
import Loader from "../components/Loader";
import { Link } from "react-scroll";

export default function Learn() {
  const cardList = [
    {title:"Definition",desc:": A decentralized digital ledger that records transactions across many computers."},
    {title:"Key Features",desc:": Transparency, Security, and Immutability."},
    {title:"How It Works",desc:": Transactions are grouped in blocks and linked together in chronological order, creating a chain."},
    {title:"Use Cases",desc:": Cryptocurrency, NFTs, Smart Contracts, Finance, Supply Chain Management, and more."},
  ]
  const cardList1 = [
    {title:"Definition",desc:": Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn."},
    {title:"Key Features",desc:": Machine Learning, Large Language Models, Robotics, and Computer Vision."},
    {title:"How It Works",desc:": AI systems learn from vast amounts of data, identify patterns, and make decisions with minimal human intervention."},
    {title:"Use Cases",desc:": Voice Assistants, Image Recognition, Predictive Analytics, Autonomous Vehicles, and more."},
  ]
  const cardList3 = [
    {title:"Enhanced Security",desc:"Blockchain's secure framework can protect AI algorithms and data from tampering and theft."},
    {title:"Trustworthy AI",desc:"Blockchain can help in creating transparent AI systems where decisions can be audited and verified."},
  ]
  const cardList4 = [
    {title:"Improved Data Sharing",desc:"Blockchain enables secure and transparent data sharing for AI training and operations."},
    {title:"Autonomous Applications",desc:"Intelligent decentralized autonomous applications (DApps), open up new possibilities for trusted automation and commercialization."},
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
    <div className="home-heading-mobile home-heading-learn">
      <div className="home-title mb-32">Learn</div>
      <div className="home-desc">Welcome to the Learning Hub. Explore the fundamentals of Web4 and the building blocks that make up the Internet of AI. From blockchain basics to AI insights and DePin systems, delve into the transformative world of technology. Let's embark on a journey of discovery together.</div>
      <div className="button-gap">
      <Link to="section1" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Blockchain & AI Basics</div></Link>
      <Link to="section2" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Web4</div></Link>
      <Link to="section3" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">DePin Basics</div></Link>
      <Link to="section4" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">GPT Protocol</div></Link>
      <Link to="section5" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Technical Insights</div></Link>
      <Link to="section6" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Videos</div></Link>
      </div>
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
      <div className="home-title mb-32">Learn</div>
      <div className="home-desc">Welcome to the Learning Hub. Explore the fundamentals of Web4 and the building blocks that make up the Internet of AI. From blockchain basics to AI insights and DePin systems, delve into the transformative world of technology. Let's embark on a journey of discovery together.</div>
      <div className="button-gap">
        <Link to="section1" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Blockchain & AI Basics</div></Link>
        <Link to="section2" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Web4</div></Link>
        <Link to="section3" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">DePin Basics</div></Link>
        <Link to="section4" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">GPT Protocol</div></Link>
        <Link to="section5" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Technical Insights</div></Link>
        <Link to="section6" smooth={true} duration={500} offset={-100}><div className="home-button button1 c-p">Videos</div></Link>
      </div>
    </div>
    
    <div className="blur-div"></div>
    </div>}

    <div className="experiment">
      <div className="tem-default temp-20">
      <div id="section1" className="justify-center text-40 mb-60">Blockchain & AI Basics</div>
      <div className='flex content-between'>
        <div className='left-b'>
          <div className="text-32 lh-70">Blockchain Basics</div>
          {
            cardList.map((item)=> {
              return <div className="text-20 mb-32 wc lh-40">{item.title}<span className="text-20n lc">{item.desc}</span></div>
            })
          }
        </div>
        <div className='right-b'>
        <div className="text-32 lh-70">AI Basics </div>
        {
            cardList1.map((item)=> {
              return <div className="text-20 mb-32 wc lh-40">{item.title}<span className="text-20n lc">{item.desc}</span></div>
            })
          }
        </div>
      </div>
      <div id="section2" className="justify-center text-40 mb-60 mt-120">What is Web4?</div>
      <div className="text-20n lh-40">Web4, often known as the 'Internet of AI', marks the evolution of the web into a decentralized, intelligent platform where blockchain, artificial intelligence, and peer-to-peer technologies converge to enhance user autonomy and create a tailored digital experience. In this fourth generation of the web, decentralized applications (dApps) operate on blockchain networks, enabling users to engage with content and services directly, without relinquishing control of their personal data. This new web paradigm champions interoperability, AI-driven personalization, and immersive virtual environments, setting the stage for a user-centric and privacy-preserving digital future.</div>
      <div className=''>
      <div className="text-32 lh-70 mt-60">Benefits</div>
      <div className="flex content-between">
        <div className='left-b'>
          {
            cardList3.map((item)=> {
              return <div className="mt-60"><div className="text-20 wc lh-40">{item.title}</div><div className="text-20n lc lh-40">{item.desc}</div></div>
            })
          }
        </div>
        <div className='right-b'>
        {/* <div className="text-32 lh-70">AI Basics </div> */}
        
        {
            cardList4.map((item)=> {
              return <div className="mt-60"><div className="text-20 wc lh-40">{item.title}</div><div className="text-20n lc lh-40">{item.desc}</div></div>
            })
          }
        </div>
        </div>
      </div>
      <div id="section3" className="justify-center text-40 mb-60 mt-120">DePin Basics</div>
      <div className="text-20n lh-40">DePin, short for Decentralized Physical Infrastructure Network, stands as a cornerstone for the emerging Web4 ecosystem, providing a robust, censorship-resistant foundation that is crucial for the autonomous and intelligent web of the future. Built upon the principles of decentralization, DePin leverages distributed networks of physical servers, storage, and connectivity solutions that are not confined to any central authority or location.</div>


      <div className="text-32 lh-70 mt-60">DePin Basics </div>
      <div className="text-20 mb-32 wc lh-40">Definition<span className="text-20n lc">: DePin refers to a decentralized approach to managing physical infrastructure through blockchain technology.</span></div>

      <div className="text-32 lh-70 mt-60">Objective</div>
      <div className="text-20n">To enhance transparency, efficiency, and trust in the management and operation of physical infrastructure assets.</div>

      <div className="text-32 lh-70 mt-60">Key Components </div>
      <div className="text-20 mb-32 wc lh-40">Distributed Ledger Technology<span className="text-20n lc">: Uses blockchain to record, share, and synchronize transactions and data across a distributed network.</span></div>

      <div className="text-32 lh-70 mt-60">Smart Contracts </div>
      <div className="text-20n">Automated contracts that execute predefined conditions, facilitating trustless agreements and operations.</div>

      <div className="text-32 lh-70 mt-60">Physical Assets </div>
      <div className="text-20n">Can include a wide range of infrastructure, from telecommunications and energy to transportation and public utilities.</div>

      <div className="text-32 lh-70 mt-60">How It Works</div>
      <div className="text-20 mb-32 wc lh-40">Decentralization<span className="text-20n lc">: Instead of a central authority, DePin relies on a network of nodes to manage and operate infrastructure assets.</span></div>
      <div className="text-20 mb-32 wc lh-40">Transparency<span className="text-20n lc">: All transactions and operations are recorded on the blockchain, ensuring visibility and auditability for all participants.</span></div>
      <div className="text-20 mb-32 wc lh-40">Automation<span className="text-20n lc">: Smart contracts automate many processes, reducing the need for intermediaries and increasing efficiency.</span></div>


      <div className="text-32 lh-70 mt-60">Benefits</div>
      <div className="text-20 mb-32 wc lh-40">Enhanced Security<span className="text-20n lc">: Blockchain's immutable ledger helps protect against fraud and unauthorized tampering.</span></div>
      <div className="text-20 mb-32 wc lh-40">Increased Efficiency<span className="text-20n lc">: Automates and streamlines operations, reducing costs and improving response times.</span></div>
      <div className="text-20 mb-32 wc lh-40">Improved Collaboration<span className="text-20n lc">: Facilitates cooperation between various stakeholders, including public entities, private companies, and the community.</span></div>


      <div className="text-32 lh-70 mt-60">Use Cases</div>
      <div className="text-20 mb-32 wc lh-40">Energy Distribution<span className="text-20n lc">: Decentralized management of energy grids, enabling peer-to-peer energy trading and renewable energy integration.</span></div>
      <div className="text-20 mb-32 wc lh-40">Supply Chain<span className="text-20n lc">: Transparent tracking of goods from production to delivery, ensuring authenticity and compliance.</span></div>
      <div className="text-20 mb-32 wc lh-40">Smart Cities<span className="text-20n lc">: Integrated management of city services, from traffic control to waste management, enhancing urban living.</span></div>

      <div id="section4" className="justify-center text-40 mb-60 mt-120">GPT Protocol</div>
      <div className="text-20n lh-40">GPT Protocol emerges as a transformative Layer 2 blockchain platform built on the Ethereum Virtual Machine (EVM), aimed at revolutionizing the artificial intelligence (AI) landscape. It integrates the power of decentralized technologies to ensure that AI development is accessible, innovative, and censorship-resistant. This platform harnesses the full potential of open-source AI tools and decentralized networks, bringing together a global community of developers to create, share, and deploy AI applications directly on the blockchain.</div>

      <div className="text-32 lh-70 mt-60">Key Features</div>
      <div className="text-20 mb-32 wc lh-40">Censorship-Resistant<span className="text-20n lc">: Ensures open access to information, challenging centralized control.</span></div>
      <div className="text-20 mb-32 wc lh-40">Decentralized Network<span className="text-20n lc">: Cultivates an ethical, web-like AI network for universal access.</span></div>
      <div className="text-20 mb-32 wc lh-40">Layer 2 Blockchain<span className="text-20n lc">: Powers open-source AI with transparent, proven blockchain technology (Ethereum and Polygon).</span></div>
      
      <div className="text-20 mb-32 wc lh-40">Open Source AI tools<span className="text-20n lc">: Our core team and community of developers deliver innovative and customizable on-chain AI applications, driving industry breakthroughs.</span></div>
      <div className="text-20 mb-32 wc lh-40">Mining-Driven Ecosystem<span className="text-20n lc">: Cryptocurrency mining of AI compute power underpins our platform's resilience and censorship-resistance using our “Proof of Resources” mechanism, securing our DePin infrastructure.</span></div>
      <div className="text-20 mb-32 wc lh-40">Zero-Knowledge Proofs<span className="text-20n lc">: Provides off-chain AI data verification and scalability through validiums.</span></div>

      <div className="text-20 mb-32 wc lh-40">$GPT Tokens<span className="text-20n lc">: Creates an AI economy that incentivizes consumers, developers, and compute providers creating a store of value over time.</span></div>
      <div className="text-20 mb-32 wc lh-40">Decentralized Computing<span className="text-20n lc">: Boosts system resilience and reduces AI’s generative costs.</span></div>
      <div className="text-20 mb-32 wc lh-40">Open Innovation<span className="text-20n lc">: Drives smarter AI solutions with transparent data and collaborative efforts.</span></div>

      


      <div id="section5" className="justify-center text-40 mb-60 mt-120">Technical Insights</div>
      <div className="flex content-between align start arch">
      <div className="text-32 lh-70 wc">Architecture Diagram</div>
      <div><Image src={Arch} width={832} height={480} /></div>
      </div>

      <div className="text-32 lh-70 wc mt-60">Our System</div>
      <div className="text-24 lh-40 mt-32">Proof of Resources</div>
      <div className="text-20n lh-40">"Proof of Resources" is a validation protocol that not only quantifies the computational assets of operators and workers in AI mining but also verifies the completion and accuracy of AI processing tasks within a decentralized grid computing system. This ensures the integrity and efficiency of the network by confirming both the availability of necessary resources and the successful execution of assigned tasks.</div>

      <div className="text-24 lh-40 mt-32">Operators</div>
      <div className="text-20n lh-40"> An Operator in the GPT Protocol is a role assumed by an entity that sustains the network's chain and manages its resources.</div>

      <div className="text-20n lh-40">Operators are responsible for: </div>

      <div className="text-20n pl-30 lh-40"> - Initiating their presence in the network by staking a minimum required amount of tokens.</div>
      <div className="text-20n pl-30 lh-40"> - Managing computational resources by attaching or detaching workers (AI miners) to their instance.</div>
      <div className="text-20n pl-30 lh-40"> - Maintaining active status by ensuring staked tokens are above a certain threshold.</div>
      <div className="text-20n pl-30 lh-40"> - Earning rewards based on the number of resource slots they manage and the quality of service provided.</div>

      <div className="text-20n lh-40">Operators are essentially the managers of the network's infrastructure, facilitating the connection between resource lenders and those who wish to utilize the AI processing capabilities of the network.</div>
      
      <div className="text-24 lh-40 mt-32">Workers</div>
      <div className="text-20n lh-40"> A Worker is a participant in the network that lends computational resources, such as CPU, GPU, and storage, to the Operators. </div>

      <div className="text-20n lh-40">Workers are responsible for:</div>

      <div className="text-20n pl-30 lh-40"> - Enrolling in the network by and providing their computational capabilities.</div>
      <div className="text-20n pl-30 lh-40"> - Become attached to an Operator to contribute to the network's processing power.</div>
      <div className="text-20n pl-30 lh-40"> - Earn rewards based on the resources lent and the AI processing jobs completed.</div>

      <div className="text-20n lh-40">Workers are the backbone of the computational force within the GPT Protocol, executing the AI processing tasks distributed by Operators and being incentivized for their contributions to the network</div>

      <div className="text-24 lh-40 mt-32">Rewards System</div>
      <div className="text-20n lh-40">The "Rewards System" is an automated mechanism that tracks active nodes and job completion, calculating and disbursing earnings across the network. It ensures workers receive base fees and job-specific compensation, while operators earn for managing resources. The system proportionally distributes the job fees, rewarding the contributions of workers, operators, and the network's sustainability.</div>


      <div className="text-24 lh-40 mt-32">Compute Contracts</div>
      <div className="text-20n lh-40"> "Compute Contracts" within this network are self-executing smart contracts with the terms of the agreement between operators and workers being directly written into code.  </div>

      <div className="text-20n lh-40">They facilitate various core functions:</div>

      <div className="text-20n pl-30 lh-40"> - Enables the creation of operator and worker instances within the network.</div>
      <div className="text-20n pl-30 lh-40"> - Allows operators to stake tokens as a commitment to the network, which can also be supported through community staking.</div>
      <div className="text-20n pl-30 lh-40"> -  Handles the allocation of computational jobs, linking workers to operators, and managing virtual machines (VMs), including their initiation, operation, and extension. </div>

      <div className="text-20n lh-40">These “Compute Contracts” act as the backbone of the network's operations, automating processes that sustain its functionality and ensure the integrity of transactions and activities within the ecosystem.</div>


      <div className="text-24 lh-40 mt-32">Client</div>
      <div className="text-20n lh-40">  A "Client" in this context refers to a web-based interface that interacts with the blockchain to facilitate transactions and communications within the network. It serves as the point of access for end users managing operators and workers. The client offers options for Trusted Execution Environments (TEE), calculates the necessary token amounts for transactions, and securely exchanges keys by transmitting the user's public SSH key through the transaction process. This ensures that users can confidently manage resources, execute jobs, and engage with the network's infrastructure.</div>

      <div className="text-24 lh-40 mt-32">Dashboard</div>
      <div className="text-20n lh-40">   A "Dashboard" in this network context is a web-based interface that utilizes Grafana and Prometheus for initial data visualization and monitoring. It is designed to aggregate and display logs from all operators, providing end users with a centralized platform to oversee and manage the network's performance, resource utilization, and operational metrics. This dashboard is a critical tool for administrators and users to maintain oversight of the network, ensuring effective management of both operators and workers.</div>

      <div id="section6" className="justify-center text-40 mb-60 mt-120">Videos</div>
      <div className="flex justify-center">
      <div className="video-gap">
        <div className="flex gap-54 v1">
        <div className="v-border"><iframe src="https://player.vimeo.com/video/942736354?h=7c99f38588&title=0&byline=0&portrait=0" width="640" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        <div className="v-border"><iframe src="https://player.vimeo.com/video/942736452?h=552642b9b2&title=0&byline=0&portrait=0" width="640" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        </div>
        <div className="flex gap-54 v1">
        <div className="v-border"><iframe src="https://player.vimeo.com/video/942736493?h=eaf371e5b4&title=0&byline=0&portrait=0" width="640" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        <div className="v-border"><iframe src="https://player.vimeo.com/video/942736958?h=7445fb533a&title=0&byline=0&portrait=0" width="640" height="640" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}
