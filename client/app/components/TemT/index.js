
import { motion, useInView } from 'framer-motion';
import CardT from '../CardT';
import './style.scss'
import { useRef } from 'react';

export default function TemT() {
  const reft = useRef(null);
  const inview = useInView(reft, {once:true})
  const cardsList = [
    {id:1,title:"Learn",description:"Dive into our quick guides to learn more about the Internet of AI."},
    {id:2,title:"Build",description:"Start crafting your projects with our developer tools."},
    {id:3,title:"Github",description:"Explore our repositories and contribute to open-source."},
    {id:4,title:"Community",description:"Connect, collaborate, and share knowledge with peers."},
  ]
  
  return (
    <div ref={reft} className='cardT-section'>
      <motion.div
          initial={{ scale:0 }}
          animate={inview? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, }}
          className='cardT-flex'>
       {cardsList.slice(0,2).map((item, index)=> {
        return <CardT title={item.title} description={item.description} id={item.id}/>
       })}
       </motion.div>
       <motion.div
          initial={{ scale:0 }}
          animate={inview? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, delay:0.2}} 
          className='cardT-flex'>
       {cardsList.slice(2,).map((item, index)=> {
        return <CardT title={item.title} description={item.description} id={item.id}/>
       })}
       </motion.div>
    </div>
  );
}
