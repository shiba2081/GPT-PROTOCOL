'use client'
import { useState } from 'react';
import './style.scss'
import Discord from '@/app/assets/img/Community/discord.png'
import Telegram from '@/app/assets/img/Community/telegram.png'
import Whatsapp from '@/app/assets/img/Community/whatsapp.png'
import Twitter from '@/app/assets/img/Community/x.png'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const Icon = dynamic(()=> import('../Icons'))


export default function CardN(props) {
  const [isHovered, setIsHovered] = useState(false)

  const openLink = (label) => {
    if (label==="Discord") {
      window.open("https://discord.gg/gptprotocol")
    } else if (label==="Telegram") {
      window.open("https://t.me/gpt_protocol")
    } else if (label==="Whatsapp") {
      window.open("https://chat.whatsapp.com/BgPBqhoGkP9411NEOYnRZe")
    } else if (label==="Twitter") {
      window.open("https://x.com/gpt_protocol")
    }
  }
  return (
    <motion.div
          initial={{ scale:0 }}
          animate={props?.inview? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          }} className='card-default cardN c-p'
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}
    onClick={()=>openLink(props?.item?.label)}>
        <div style={{scale: isHovered? 1.1:1}}>{props?.child==="second"?  
        <Image src={props?.item?.label==="Discord"? Discord:
        props?.item?.label==="Telegram"? Telegram:
        props?.item?.label==="Whatsapp"? Whatsapp:Twitter} width={140} height={140}/>:<Icon name={props?.item?.id} fill={isHovered? "#DDFFCB":"#fff"} width={80} height={80} />}</div>
        <div className='cardn-desc'>{props?.item?.label}</div>

    </motion.div>
  );
}
