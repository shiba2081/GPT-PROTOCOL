import './style.scss'
import res1 from "../../assets/img/Home/Resources1.gif"
import Image from 'next/image';

export default function CardF(props) {
  return (
    <div className={`card-default cardF ${props?.animation==="no" && "card-hw"}`}>
      <div className='cardf-title'>{props.title}</div>
      {props?.animation==="no"?
      <div>
      {props?.description?.map((desc)=> {
        return <div className='cardf-desc2'>{desc}</div>
      })}
      </div>
      :<div className='cardf-detail'>
      {props?.description?.map((desc)=> {
        return <div className='cardf-desc'>{desc}</div>
      })}
      </div>
      }
    </div>
  );
}
