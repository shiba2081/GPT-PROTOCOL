import { motion } from 'framer-motion';
import './style.scss'
import Image from 'next/image';

export default function CardF(props) {

  const openLink = (label) => {
    if (label==="Learn More") {
      window.open("https://github.com/gptprotocol")
    } else if (label==="Join Discord") {
      window.open("https://discord.gg/gptprotocol")
    } else if (label==="Reward System") {
      window.open("https://staking.gptprotocol.org/")
    } else if (label==="Block Explorer") {
      window.open("https://skopje-explorer.gptprotocol.io/")
    } else if (label==="Block Explorer") {
      window.open("https://skopje-explorer.gptprotocol.io/")
    } else if (label==="Bridge") {
      window.open("https://skopje-bridge.gptprotocol.io/")
    } else if (label==="Faucet") {
      window.open("https://skopje-faucet.gptprotocol.io/")
    }else if (label==="System Requirements") {
      window.open("https://gpt-protocol.gitbook.io/gpt-protocol")
    } else if (label==="APIs") {
      window.open("https://gpt-protocol.gitbook.io/gpt-protocol")
    } else if (label==="Hardware") {
      window.open("https://gpt-protocol.gitbook.io/gpt-protocol")
    } else if (label==="Join Discord") {
      window.open("https://discord.com/invite/gptprotocol")
    } else if (label==="GPT Bounty Program") {
      window.open("https://docs.google.com/forms/d/1bQev-26xapcwRurllX49Yr6V4SfU0fr491gOAve8prc/")
    } else if (label==="Run Prompt") {
      window.open("https://assistant.gphelpers.com/")
    }
  }
  return (
    <motion.div
          initial={{ scale:0 }}
          animate={(props?.inview)? {scale:1}:{}}
          transition={{type:'spring', stiffness:100, damping:20, mass:1, 
          }} 
    className={`card-default cardF ${props?.animation==="no" && "card-hw"} ${(props?.title==="Join Discord" || props?.title==="GPT Bounty Program" || props?.title==="Block Explorer") && "c-p"}`}
    onClick={()=>openLink(props?.title)}
    >
      <div className='flex content-between'><div className={`cardf-title `}>{props.title}</div><div className='soon'>{(props.title==="Dashboard" || props.title==="Client") && "coming soon.."}</div></div>
      {props?.animation==="no"?
      <div>
      {props?.description?.map((desc)=> {
        return <div className={`cardf-desc2`}>{desc}</div>
      })}
      </div>
      :<div className='cardf-detail'>
      {props?.description?.map((desc)=> {
        return <div className='flex content-between'><div className={`cardf-desc ${(desc==="Dashboard" || desc==="Let's Create")? "":"c-p"}`} onClick={()=>openLink(desc)}>{desc}</div><div className='soon'>{(desc==="Dashboard" || desc==="Let's Create") && "coming soon.."}</div></div>
      })}
      </div>
      }
    </motion.div>
  );
}
