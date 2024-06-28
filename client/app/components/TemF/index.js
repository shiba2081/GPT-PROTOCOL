import './style.scss'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Icon = dynamic(()=> import('../Icons'))

export default function TemF({ch}) {
  const videoRef = useRef(null);
  const leftref = useRef(null);
  const rightref = useRef(null);
  const inleftview = useInView(leftref, {once:true})
  const inrightview = useInView(rightref, {once:true})
  const leftref1 = useRef(null);
  const rightref1 = useRef(null);
  const inleftview1 = useInView(leftref1, {once:true})
  const inrightview1 = useInView(rightref1, {once:true})
  const leftref2 = useRef(null);
  const inleftview2 = useInView(leftref2, {once:true})

  const openLink = (label) => {
    if (label==="developer") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScTQfHHwqTzQT7DjknklaAdkap6txp_NYvsrNhD0uPlptd-Gg/viewform")
    } else if (label==="partner") {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSdMOrYvRd_mqx5Kb0CuKYGWYhjW-2xd_t6uim6bV0R52lSYAg/viewform")
    }
  }

  const handleMouseEnter = () => {
    console.log("enter")
    // if (videoRef.current) {
    //   videoRef.current.pause();
    // }
  };

  const handleMouseLeave = () => {
    console.log("leave")
    // if (videoRef.current) {
    //   videoRef.current.play();
    // }
  };

  return (
    <>
    {ch === "first" ?
    <div ref={leftref} className='TemF'>
    <motion.div
    
          initial={{ x: '-100vw' }}
          animate={inleftview? {x:0}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, duration:1}}
          // exit={{ x: -100 }}
          className='left' style={{paddingTop:"40px"}}>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}}
 className='left-head '>We’re Committed to Building the <span>Internet of AI.</span></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}}
 className='left-li '><div><Icon name='net1' fill='#fff' width={32} height={32} /></div><div>Create sovereign AI technology that is truly open and censorship-resistant.</div></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}}
 className='left-li '><div><Icon name='net2' fill='#fff' width={32} height={32} /></div><div>Enable transparency of your AI data on-chain in order to participate in federated learning and collective intelligence.</div></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}}
 className='left-li '><div><Icon name='net3' fill='#fff' width={32} height={32} /></div><div>Become part of the movement to build a more free and creative “AI Internet”.</div></motion.div>
        </motion.div>
        <motion.div
    
          // initial={{ x: '100vw' }}
          // animate={inview? {x:0}:{}}
          // transition={{ease: 'easeInOut', duration:1}} 
          className='right'>
        <video width={600} height={600} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <source src="/internetofai.mp4" type="video/mp4" />
        </video>
        {/* <Image src={internet} width={600} height={600} style={{mixBlendMode: "screen"}}/> */}
        </motion.div>
    </div>: ch === "second"?
    <div ref={rightref} className='TemF' style={{flexDirection:'row-reverse'}}>
    <motion.div 
    initial={{ x: '100vw' }}
    animate={inrightview? {x:0}:{}}
    transition={{type:'spring', stiffness:100, damping:20, mass:1, duration:1}}
    className='left' style={{paddingTop:"90px"}}>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}} className='left-head '>Validating AI Mining with <span>Proof of Resources</span></motion.div>
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .1}} className='left-li '><div>Proof of Resources is a validation protocol that not only quantifies the computational assets of operators and workers in AI mining but also verifies the completion and accuracy of AI processing tasks within a decentralized grid computing system. This ensures the integrity and efficiency of the network by confirming both the availability of necessary resources and the successful execution of assigned tasks.</div></motion.div>
        
    </motion.div>
    <div className='right'>
    <video width={600} height={600} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <source src="/mining.mp4" type="video/mp4" />
        </video></div>
    </div>: ch === "third"?
    <div ref={leftref1} className='TemF'>
    <motion.div
    
          initial={{ x: '-100vw' }}
          animate={inleftview1? {x:0}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, duration:1}} className='left' >
            <div className='lefts-head mb-30 '>Benefits</div>
            <ul>
              <li>Earn rewards by contributing computational power.</li>
              <li>Participate in a cutting-edge decentralized AI network.</li>
              <li>Gain access to a global community of innovators.</li>
            </ul>
            <div className='lefts-head mt-60 mb-30 '>Joining Process</div>
            <ul>
              <li>Register through the web-based client or CLI.</li>
              <li>Stake the minimum required tokens to create a miner profile.</li>
              <li>Connect computational resources and begin mining.</li>
              <li>Monitor performance and earnings via the Dashboard.</li>
            </ul>
            </motion.div>
        <div className='right'><video width={600} height={600} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <source src="/mining.mp4" type="video/mp4" />
        </video></div>
    </div>:ch === "fourth"?
    <div ref={rightref1} className='TemF' style={{flexDirection:'row-reverse'}}>
    <motion.div
    
          initial={{ x: '100vw' }}
          animate={inrightview1? {x:0}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, duration:1}} className='left'>
            <div className='lefts-head mb-30'>Benefits</div>
            <ul>
              <li>Earn rewards by contributing computational power.</li>
              <li>Participate in a cutting-edge decentralized AI network.</li>
              <li>Gain access to a global community of innovators.</li>
            </ul>
            <div className='lefts-head mt-60 mb-30'>Build With Us</div>
            <div className='left-li'>
            Ready to get started in AI and blockchain development? Join our community of developers and start creating trusted applications for the age of automation.
            </div>
            <div className="home-button button1 c-p" onClick={()=>{openLink("developer")}}>Become a Developer</div>
            </motion.div>
        <div className='right'>
        <video width={600} height={600} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <source src="/internetofai.mp4" type="video/mp4" />
        </video></div>
    </div>:
    <div ref={leftref2} className='TemF'>
    <motion.div
    
          initial={{ x: '-100vw' }}
          animate={inleftview2? {x:0}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, duration:1}} className='left'>
            <div className='lefts-head mb-30'>Benefits</div>
            <ul>
              <li>Earn rewards by contributing computational power.</li>
              <li>Participate in a cutting-edge decentralized AI network.</li>
              <li>Gain access to a global community of innovators.</li>
            </ul>
            <div className='lefts-head mt-60 mb-30'>Build With Us</div>
            <div className='left-li'>
            Ready to get started in AI and blockchain development? Join our community of developers and start creating trusted applications for the age of automation.
            </div>
            <div className="home-button button1 c-p" onClick={()=>{openLink("partner")}}>Become a Partner</div>
            </motion.div>
        <div className='right'><video width={600} height={600} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline
            ref={videoRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <source src="/mining.mp4" type="video/mp4" />
        </video></div>
    </div>}
    </>
  );
}
