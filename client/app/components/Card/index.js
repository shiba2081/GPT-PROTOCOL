import './style.scss'
import card1 from '../../assets/img/card1.png'
import card2 from '../../assets/img/card2.png'
import card3 from '../../assets/img/card3.png'
import card4 from '../../assets/img/card4.png'
import Image from 'next/image';

export default function Card(props) {
  return (
    <div className='card'>
        <div className='align-center'>
        {
            props.img==="card1"? 
            <Image src={card1} width={162} height={140}/>:
            props.img==="card2"? 
            <Image src={card2} width={162} height={140}/>:
            props.img==="card3"? 
            <Image src={card3} width={162} height={140}/>:
            <Image src={card4} width={162} height={140}/>
        }
        </div>
        <div className='card-title'>{props.title}</div>
        <div className='card-desc'>{props.description}</div>
    </div>
  );
}
