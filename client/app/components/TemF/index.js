import './style.scss'
import Image from 'next/image';
import internet from '../../assets/img/Home/internetAi.gif'
import mining from '../../assets/img/Home/mining.gif'
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const Icon = dynamic(()=> import('../Icons'))

export default function TemF({ch}) {
  return (
    <>
    {ch === "first" ?
    <div className='TemF'>
        <div className='left' style={{paddingTop:"40px"}}>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}}
 className='left-head'>We’re Committed to Building the <span>Internet of AI.</span></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}}
 className='left-li'><div><Icon name='net1' fill='#fff' width={32} height={32} /></div><div>Create sovereign AI technology that is truly open and censorship-resistant.</div></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}}
 className='left-li'><div><Icon name='net2' fill='#fff' width={32} height={32} /></div><div>Enable transparency of your AI data on-chain in order to participate in federated learning and collective intelligence.</div></motion.div>
            <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}}
 className='left-li'><div><Icon name='net3' fill='#fff' width={32} height={32} /></div><div>Become part of the movement to build a more free and creative “AI Internet”.</div></motion.div>
        </div>
        <div className='right'><Image src={internet} width={600} height={600} style={{mixBlendMode: "screen"}}/></div>
    </div>: ch === "second"?
    <div className='TemF' style={{flexDirection:'row-reverse'}}>
    <div className='left' style={{paddingTop:"90px"}}>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='left-head'>Validating AI Mining with <span>Proof of Resources</span></motion.div>
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='left-li'><div>Proof of Resources is a validation protocol that not only quantifies the computational assets of operators and workers in AI mining but also verifies the completion and accuracy of AI processing tasks within a decentralized grid computing system. This ensures the integrity and efficiency of the network by confirming both the availability of necessary resources and the successful execution of assigned tasks.</div></motion.div>
        
    </div>
    <div className='right'><Image src={mining} width={600} height={600} style={{mixBlendMode: "screen"}}/></div>
    </div>: ch === "third"?
    <div className='TemF'>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='left' >
            <div className='lefts-head mb-30'>Benefits</div>
            <ul>
              <li>Earn rewards by contributing computational power.</li>
              <li>Participate in a cutting-edge decentralized AI network.</li>
              <li>Gain access to a global community of innovators.</li>
            </ul>
            <div className='lefts-head mt-60 mb-30'>Joining Process</div>
            <ul>
              <li>Register through the web-based client or CLI.</li>
              <li>Stake the minimum required tokens to create a miner profile.</li>
              <li>Connect computational resources and begin mining.</li>
              <li>Monitor performance and earnings via the Dashboard.</li>
            </ul>
            </motion.div>
        <div className='right'><Image src={mining} width={600} height={600} style={{mixBlendMode: "screen"}}/></div>
    </div>:ch === "fourth"?
    <div className='TemF' style={{flexDirection:'row-reverse'}}>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='left'>
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
            <div className="home-button button1">Become a Developer</div>
            </motion.div>
        <div className='right'><Image src={internet} width={600} height={600} style={{mixBlendMode: "screen"}}/></div>
    </div>:
    <div className='TemF'>
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='left'>
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
            <div className="home-button button1">Become a Partner</div>
            </motion.div>
        <div className='right'><Image src={mining} width={600} height={600} style={{mixBlendMode: "screen"}}/></div>
    </div>}
    </>
  );
}
