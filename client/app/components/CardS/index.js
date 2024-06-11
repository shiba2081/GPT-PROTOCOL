import { useEffect, useRef, useState } from 'react';
import './style.scss'
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function CardS(props) {
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
    <motion.div
          initial={{ scale:0 }}
          animate={props.inview? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          delay:(props.id===1 || props.id===4)? .2:(props.id===2 || props.id===5)? 0.5:0.7}}
           className='card-default cardS' style={{top: (props.id===2||props.id===5) && (screenSize.width>720? "136px":"92px")}}>
      <div className='card-detail'>
        <div className='cards-title'>{props.title}</div>
        <div className='cards-desc'>{props.description}</div>
      </div>
    </motion.div>
  );
}
