import './style.scss'
import Security from "../../assets/img/Network/security.png"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CardBig({child,inview}) {
  
  return (
    <motion.div
          initial={{ scale:0 }}
          animate={inview? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          }} className='card-default cardN-big'>
        {
          child==="first"?
          <video width={400} height={400} style={{mixBlendMode: "lighten"}} autoPlay loop muted playsInline>
          <source src="/foundation.mp4" type="video/mp4" />
        </video>:
          <Image src={Security} width={400} height={400} />
        }
    </motion.div>
  );
}
