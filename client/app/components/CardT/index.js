import './style.scss'
import res1 from "../../assets/img/Home/Resources1.gif"
import res2 from "../../assets/img/Home/Resources2.gif"
import res3 from "../../assets/img/Home/Resources3.gif"
import res4 from "../../assets/img/Home/Resources4.gif"
import Image from 'next/image';

export default function CardT(props) {
  return (
    <div className='card-default cardT'>
    <div className='card-gif'>
    <Image src={props.id===1 ? res1:props.id===2? res2:props.id===3? res3:res4} width={180} height={180} style={{mixBlendMode: "screen"}}/>
    </div>
      <div className='card-detail'>
        <div className='cardt-title'>{props.title}</div>
        <div className='cardt-desc'>{props.description}</div>
        
      </div>
      <div className='learn'>Learn More</div>
    </div>
  );
}