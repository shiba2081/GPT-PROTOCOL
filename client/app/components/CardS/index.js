import './style.scss'
import Image from 'next/image';

export default function CardS(props) {
  return (
    <div className='card-default cardS' style={{top: (props.id===2||props.id===5)&& "136px"}}>
      <div className='card-detail'>
        <div className='cards-title'>{props.title}</div>
        <div className='cards-desc'>{props.description}</div>
      </div>
    </div>
  );
}
