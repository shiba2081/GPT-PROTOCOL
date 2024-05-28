
import './style.scss'
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
const Icon = dynamic(()=> import('../Icons'))
// "M 10 100 Q 250 100 490 100"
export default function Footer() {
  // const controls = useAnimation();
    const ref = useRef(null);
    const Pages = ["Home","Learn","Build","Solution","Network","Community"]
    const Resources = ["Documentation","Github","Get Support"]
    const Links = ["Whitepaper","Tokenomics","Contract Address","Buy $GPT","Stake $GPT"]
    const [copy, setCopy] = useState(false)
    // const [point, setPoint] = useState({ x: 436, y: 242 });
    
    // const {x,y} = useFollowPointer(ref)
    // const [isHovered, setIsHovered] = useState(false)
    
    // console.log(x,y)

    const handleDivClick = (link) => {
        // Create a temporary input element
        const tempInput = document.createElement('input');
        tempInput.value = link;
        document.body.appendChild(tempInput);
        // Select the link text
        tempInput.select();
        // Copy the selected text
        document.execCommand('copy');
        // Remove the temporary input
        document.body.removeChild(tempInput);
        // Optionally, provide some feedback to the user
        // alert('Link copied to clipboard!');
      };

    const openLink = (label) => {
        if (label==="Tokenomics") {
          window.open("https://gptprotocol.org/GPT-Protocol-Tokenomics.pdf")
        } else if (label==="Buy $GPT") {
          window.open("https://app.uniswap.org/swap?&chain=mainnet&outputCurrency=0xCdb4A8742ed7D0259b51E3454C46C9D6C48d5e88")
        } else if (label==="Stake $GPT") {
          window.open("https://staking.gptprotocol.org/")
        } else if (label==="Contract Address") {
          handleDivClick('0xCdb4A8742ed7D0259b51E3454C46C9D6C48d5e88')
          setCopy(true)
          setTimeout(() => {
            setCopy(false)
          }, 1000);
        } else if (label==="Discord") {
          window.open("https://discord.gg/gptprotocol")
        } else if (label==="Telegram") {
          window.open("https://t.me/gpt_protocol")
        } else if (label==="Whatsapp") {
          window.open("https://chat.whatsapp.com/BgPBqhoGkP9411NEOYnRZe")
        } else if (label==="Twitter") {
          window.open("https://x.com/gpt_protocol")
        } else if (label==="Instagram") {
            window.open("https://www.instagram.com/gptprotocol/")
        } else if (label==="Whitepaper") {
          window.open('/GPT-Protocol-Whitepaper-v2.0.pdf','_blank')
        } else if (label==="Learn") {
          window.open("/learn", "_self")
        } else if (label==="Build") {
          window.open("/build", "_self")
        } else if (label==="Github") {
          window.open("https://github.com/gptprotocol")
        } else if (label==="Community") {
          window.open("/community", "_self")
        } else if (label==="Home") {
          window.open("/", "_self")
        } else if (label==="Solution") {
          window.open("/solution", "_self")
        } else if (label==="Network") {
          window.open("/network", "_self")
        } else if (label==="Community") {
          window.open("/community", "_self")
        } else if (label==="Documentation") {
          window.open("	https://github.com/gptprotocol")
        } else if (label==="Github") {
          window.open("https://github.com/gptprotocol")
        } else if (label==="Get Support") {
          window.open("https://t.me/gpt_protocol")
        }
        // setCopy(false)
      }
      const [screenSize, setScreenSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
      });
    
      useEffect(() => {
        function handleResize() {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    // const findmypoint = (event) => {
    //   const rect = event.target.getBoundingClientRect();
    //   const x = event.clientX - rect.left;
    //   const y = event.clientY - rect.top;
    //   setPoint({ x, y });
    //   console.log(x,y)
    // }
    // const backTo = () => {
    //     const x = 436;
    //     const y = 242;
    //     console.log("backto")
    //     controls.start({ d: `M 10 250 Q ${x} ${y} 980 250`, transition: { type: 'spring', damping: 1, stiffness: 200 } });
        
    // }
    
  return (
    <div className='footer-container'>
    {/* <div 
    // onHoverStart={(e) => console.log('Hover starts',e)} 
    className='justify-center' ref={ref} 
    onMouseEnter={(dets)=> findmypoint(dets)}
    style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                backgroundColor: '#070707',
            }}
    onMouseMove={(dets)=> findmypoint(dets)}
    onMouseLeave={()=> backTo()}
    >
    <svg width="100%" height="500" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
    d={`M 10 250 Q ${point.x} ${point.y} 980 250`}
    stroke="white" fill="transparent" animate={controls} key={Math.random()+point.x+point.y}/>
    </svg>
    
    </div> */}
    <div className='footer flex'>
        <div className='flex gap-84 footer-content'>
        <div className='m-auto gpt'><Icon name='footer' fill='#fff' width={162} height={52} /></div>
        <div className='flex gap-80 footer-info'>
            <div>
                <div className='link-title'>Pages</div>
                {Pages.map((item)=> 
                <div className='link-li c-p' onClick={()=>openLink(item)}>{item}</div>)}
            </div>
            <div>
                <div className='link-title'>Resources</div>
                {Resources.map((item)=> 
                <div className='link-li c-p' onClick={()=>openLink(item)}>{item}</div>)}
            </div>
            <div>
                <div className='link-title'>Links</div>
                {Links.map((item)=> 
                <div className='link-li c-p' onClick={()=>openLink(item)}>{(screenSize.width>720)? (copy && item==="Contract Address" && <div className='copy'><Icon name='copied' fill='#fff' width={105} height={42} /></div>):(copy && item==="Contract Address" && <div className='mcopy'><Icon name='mcopied' fill='#fff' width={60} height={25} /></div>)}{item}</div>)}
            </div>
        </div>
        </div>
        <div className='flex gap-24 m-auto'>
        <div className="c-p" onClick={()=> openLink("Discord")}><Icon name='discord' fill='#fff' width={32} height={32} /></div>
        <div className="c-p" onClick={()=> openLink("Telegram")}><Icon name='telegram' fill='#fff' width={32} height={32} /></div>
        <div className="c-p" onClick={()=> openLink("Instagram")}><Icon name='instagram' fill='#fff' width={32} height={32} /></div>
        <div className="c-p" onClick={()=> openLink("Twitter")}><Icon name='x' fill='#fff' width={32} height={32} /></div>
        </div>
    </div>
    <div className='border-line'></div>
    <div className='copyright'>
    Copyright © 2024 GPT Protocol, All Rights Reserved.
    </div>
    <div style={{display:"none"}}>
      <div>DESIGNED BY PANKAJ GUJAR.</div>
      <div>DEVELOPED BY KULDEEP GUJAR.</div>
    </div>
    </div>
  );
}
