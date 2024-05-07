import './style.scss'
import Internet from "../../assets/img/Network/internet.gif"
import Security from "../../assets/img/Network/security.png"
import Image from 'next/image';

export default function CardBig({child}) {
  return (
    <div className='card-default cardN-big'>
        {
          child==="first"?
          <Image src={Internet} width={400} height={400} style={{mixBlendMode: "lighten"}}/>:
          <Image src={Security} width={400} height={400} />
        }
    </div>
  );
}
