
import CardF from '../CardF';
import './style.scss'

export default function TemB(props) {
  
//   console.log(props)
  return (
    <div className='cardB-section'>
      <div className='cardB-flex'>
       {props.cardsList?.map((item, index)=> {
        return <CardF title={item?.title} inview={props?.inview} description={item?.description} id={item.id} animation={props?.animation}/>
       })}
       </div>
    </div>
  );
}
