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
    // const {x,y} = useFollowPointer(ref)
    // const [isHovered, setIsHovered] = useState(false)
    
    // console.log(x,y)
  return (
    <div className='footer-container'>
    {/* <div className='justify-center' ref={ref} onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}>
    <svg width="500" height="160" xmlns="http://www.w3.org/2000/svg">
    <path d={`M 10 100 Q ${x} ${y} 490 100`} stroke="white" fill="transparent"/>
    </svg>
    </div> */}
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