import { useRef } from 'react';
import './style.scss'
// import res1 from "../../assets/img/Home/Resources1.gif"
// import res2 from "../../assets/img/Home/Resources2.gif"
// import res3 from "../../assets/img/Home/Resources3.gif"
// import res4 from "../../assets/img/Home/Resources4.gif"
import Image from 'next/image';

export default function CardT(props) {

  const videoRef = useRef(null);

  const openLink = (label) => {
    if (label==="Learn") {
      window.open("/learn", "_self")
    } else if (label==="Build") {
      window.open("/build", "_self")
    } else if (label==="Github") {
      window.open("https://github.com/gptprotocol")
    } else if (label==="Community") {
      window.open("/community", "_self")
    }
  }

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className='card-default cardT c-p' onClick={()=>openLink(props?.title)}
    
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <div className='card-gif'>
    <video ref={videoRef} width={180} height={180} style={{mixBlendMode: "screen"}} autoPlay loop muted playsInline>
      <source src={props.id===1 ? "Resources1.mp4":props.id===2? "Resources2.mp4":props.id===3? "Resources3.mp4":"Resources4.mp4"} type="video/mp4" />
    </video>
    {/* <Image src={props.id===1 ? res1:props.id===2? res2:props.id===3? res3:res4} width={180} height={180} style={{mixBlendMode: "screen"}}/> */}
    </div>
      <div className='card-detail'>
        <div className='cardt-title'>{props.title}</div>
        <div className='cardt-desc'>{props.description}</div>
        
      </div>
      <div className='learn'>Learn More</div>
    </div>
  );
}
