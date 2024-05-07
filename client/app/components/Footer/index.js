import { motion, spring } from 'framer-motion';
import './style.scss'
import dynamic from 'next/dynamic';
import { useRef, useState } from "react";
const Icon = dynamic(()=> import('../Icons'))
// "M 10 100 Q 250 100 490 100"
export default function Footer() {
    const ref = useRef(null);
    const Pages = ["Home","Learn","Build","Solution","Network","Community"]
    const Resources = ["Documentation","Github","Get Support"]
    const Links = ["Whitepaper","Tokenomics","Contract Address","Buy $GPT","Stake $GPT"]
    // const [point, setPoint] = useState({ x: 436, y: 242 });
    // const {x,y} = useFollowPointer(ref)
    // const [isHovered, setIsHovered] = useState(false)
    
    // console.log(x,y)
    // const findmypoint = (event) => {
    //     const rect = event.target.getBoundingClientRect();
    //     const x = event.clientX - rect.left;
    //     const y = event.clientY - rect.top;
    //     setPoint({ x, y });
    //     console.log(x,y)
    // }
    // const backTo = () => {
    //     const x = 436;
    //     const y = 242;

    //     setPoint({x,y})
    //     setTimeout(()=> {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth' // Smooth scrolling behavior
    //           });
    //     },1000)
        
    // }
  return (
    <div className='footer-container'>
    {/* <motion.div 
    // onHoverStart={(e) => console.log('Hover starts',e)} 
    className='justify-center' ref={ref} 
    // onMouseEnter={(dets)=> findmypoint(dets)}
    style={{
                position: 'relative',
                width: '1000px',
                height: '500px',
                backgroundColor: 'red',
            }}
    onMouseMove={(dets)=> findmypoint(dets)}
    onMouseLeave={(dets)=> backTo(dets)}
    >
    <svg width="1000" height="500" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
    d={`M 10 250 Q ${point.x} ${point.y} 980 250`}
    stroke="white" fill="transparent"/>
    </svg>
    
    </motion.div>
    <p>Mouse coordinates relative to the div: ({point.x}, {point.y})</p> */}
    <div className='footer flex'>
        <div className='flex gap-84'>
        <div><Icon name='footer' fill='#fff' width={162} height={52} /></div>
        <div className='flex gap-80'>
            <div>
                <div className='link-title'>Pages</div>
                {Pages.map((item)=> 
                <div className='link-li'>{item}</div>)}
            </div>
            <div>
                <div className='link-title'>Resources</div>
                {Resources.map((item)=> 
                <div className='link-li'>{item}</div>)}
            </div>
            <div>
                <div className='link-title'>Links</div>
                {Links.map((item)=> 
                <div className='link-li'>{item}</div>)}
            </div>
        </div>
        </div>
        <div className='flex gap-24'>
        <div><Icon name='discord' fill='#fff' width={32} height={32} /></div>
        <div><Icon name='telegram' fill='#fff' width={32} height={32} /></div>
        <div><Icon name='instagram' fill='#fff' width={32} height={32} /></div>
        <div><Icon name='x' fill='#fff' width={32} height={32} /></div>
        </div>
    </div>
    <div className='border-line'></div>
    <div className='copyright'>
    Copyright © 2024 GPT Protocol, All Rights Reserved.
    </div>
    </div>
  );
}
