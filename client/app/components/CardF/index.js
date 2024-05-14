import './style.scss'
import res1 from "../../assets/img/Home/Resources1.gif"
import Image from 'next/image';

export default function CardF(props) {

  const openLink = (label) => {
    if (label==="Github") {
      window.open("https://x.com/gpt_protocol")
    } else if (label==="Join Discord") {
      window.open("https://discord.gg/gptprotocol")
    } else if (label==="Reward System") {
      window.open("https://staking.gptprotocol.org/")
    } else if (label==="Block Explorer") {
      window.open("https://skopje-explorer.gptprotocol.io/")
    }
  }
  return (
    <div 
    className={`card-default cardF ${props?.animation==="no" && "card-hw"}`}
    onClick={()=>openLink(props?.title)}>
      <div className='cardf-title'>{props.title}</div>
      {props?.animation==="no"?
      <div>
      {props?.description?.map((desc)=> {
        return <div className='cardf-desc2'>{desc}</div>
      })}
      </div>
      :<div className='cardf-detail'>
      {props?.description?.map((desc)=> {
        return <div className='cardf-desc' onClick={()=>openLink(desc)}>{desc}</div>
      })}
      </div>
      }
    </div>
  );
}
