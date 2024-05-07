import './style.scss'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
const Icon = dynamic(()=> import('../Icons'))

export default function BigCard(props) {
  return (
    <div className='big-card'>
    <div className='card-default cardB'>
        
    <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ease:[0.76, 0, 0.24, 1],duration: .4}} className='card-flex'>
          <div className='big-card-title'>{props?.heading}</div>
            <div className='card-div1 t-align-end'>
              
              {props.cardsList.map((item)=> {
                return <div className='cardb-dialog' style={{top:`${item.top}`}}>
                  <div className='dialog-title'>{item.title}</div>
                  <div className='dialog-desc'>{item.description}</div>
                </div>
              })
              }
            </div>
            <div className='card-div2'><Icon name='spiral' fill='none' width={204} height={1238} /></div>
            <div className='card-div3'>
              {props.cardsList1.map((item)=> {
                return <div className='cardb-dialog' style={{top:`${item.top}`}}>
                  <div className='dialog-title'>{item.title}</div>
                  <div className='dialog-desc'>{item.description}</div>
                </div>
              })
              }
            </div>
        </motion.div>
    </div>
    </div>
  );
}
