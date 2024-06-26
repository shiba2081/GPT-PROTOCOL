
import { useRef } from 'react';
import CardS from '../CardS';
import './style.scss'
import { useInView } from 'framer-motion';

export default function TemS() {
  const ref = useRef(null);
  const inview = useInView(ref, {once:true})
  const cardsList = [
    {id:1,title:"65K",description:"Transactions Per Second"},
    {id:2,title:"2.2s",description:"Block Time"},
    {id:3,title:"1.5K+",description:"Holders"},
    {id:4,title:"1.73 Gwei",description:"Gas Fees"},
    {id:5,title:"74K+",description:"Blocks"},
    {id:6,title:"114K",description:"Latest Batches"},
  ]
  
  return (
    <div ref={ref} className='cardS-section'>
      <div className='cardS-flex'>
       {cardsList.slice(0,3).map((item, index)=> {
        return <CardS title={item.title} description={item.description} id={item.id} inview={inview}/>
       })}
       </div>
       <div className='cardS-flex'>
       {cardsList.slice(3,).map((item, index)=> {
        return <CardS title={item.title} description={item.description} id={item.id} inview={inview}/>
       })}
       </div>
    </div>
  );
}
