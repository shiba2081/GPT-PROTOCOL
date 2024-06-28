import './style.scss'
import Image from 'next/image';
import dynamic from 'next/dynamic';
import CardN from '../CardN';
import CardBig from '../CardBig';
const Icon = dynamic(()=> import('../Icons'))

export default function TemN({child,inview}) {
    const cardList = [
        {id:"gov1",label:"Community-driven governance model"},
        {id:"gov2",label:"Token-based voting system for democratic decision-making"},
        {id:"gov3",label:"Transparency in policy changes and network upgrades"},
        {id:"gov4",label:"Mechanisms for community proposals and consensus building"}
    ]
    const cardList1 = [
        {id:"sec1",label:"Advanced security protocols to protect data and transactions"},
        {id:"sec2",label:"Continuous monitoring for system integrity and threat prevention"},
        {id:"sec3",label:"Use of encryption and zero-knowledge proofs for privacy"},
        {id:"sec4",label:"Regular audits, updates for top security standards"}
    ]
  
  return (
    <>
    {child==="first"?
    <div className='TemN'>
        <div className='flex gap-20 flexn'>
        <div className='left'>
            <CardBig child={child} inview={inview}/>
        </div>
        <div className='right'>
            {cardList.map((item)=> {
                return <CardN item={item} inview={inview}/>
            })}
        </div>
        </div>
    </div>:
    <div className='TemN' >
        <div className='flex gap-20 flexn'>
        <div className='right'>
            {cardList1.map((item)=> {
                return <CardN item={item} inview={inview}/>
            })}
        </div>
        <div className='left'>
            <CardBig child={child} inview={inview}/>
        </div>
        </div>
    </div>
    }
    </>
  );
}
