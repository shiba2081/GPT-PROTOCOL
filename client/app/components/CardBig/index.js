import './style.scss'
import Security from "../../assets/img/Network/security.png"
import Image from 'next/image';

export default function CardBig({child}) {
  return (
    <div className='card-default cardN-big'>
        {
          child==="first"?
          <video width={400} height={400} style={{mixBlendMode: "lighten"}} autoPlay loop muted playsInline>
          <source src="/internet.mp4" type="video/mp4" />
        </video>:
          <Image src={Security} width={400} height={400} />
        }
    </div>
  );
}
