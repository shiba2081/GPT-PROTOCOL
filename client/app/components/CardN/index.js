'use client'
import { useState } from 'react';
import './style.scss'
import Discord from '@/app/assets/img/Community/discord.png'
import Telegram from '@/app/assets/img/Community/telegram.png'
import Whatsapp from '@/app/assets/img/Community/whatsapp.png'
import Twitter from '@/app/assets/img/Community/x.png'
import Image from 'next/image';
import dynamic from 'next/dynamic';
const Icon = dynamic(()=> import('../Icons'))


export default function CardN(props) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='card-default cardN'
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=> setIsHovered(false)}>
        <div style={{scale: isHovered? 1.1:1}}>{props?.child==="second"?  
        <Image src={props?.item?.label==="Discord"? Discord:
        props?.item?.label==="Telegram"? Telegram:
        props?.item?.label==="Whatsapp"? Whatsapp:Twitter} width={140} height={140}/>:<Icon name={props?.item?.id} fill={isHovered? "#DDFFCB":"#fff"} width={80} height={80} />}</div>
        <div className='cardn-desc'>{props?.item?.label}</div>

    </div>
  );
}
