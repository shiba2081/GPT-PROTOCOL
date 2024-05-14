
import Image from 'next/image';
import Loader_Image from '../../assets/img/loader.png'
import './style.scss'

const Loader = () => {
    // const [point, setPoint] = useState({ x: 0, y: 0 });
    // const findmypoint = (event) => {
    // const rect = event.target.getBoundingClientRect();
    // const x = event.clientX - rect.left;
    // const y = event.clientY - rect.top;
    // setPoint({ x, y });
    // console.log(x,y)
    // }
// const backTo = () => {
//     const x = 436;
//     const y = 242;
//     console.log("backto")
//     // controls.start({ d: `M 10 250 Q ${x} ${y} 980 250`, transition: { type: 'spring', damping: 1, stiffness: 200 } });
    
// }
  return (
    <div className="loader"
    // onMouseMove={(dets)=> findmypoint(dets)} 
    >
      <div className="loader-container">
      <div className="loader-animation"></div>
      <div className="loader-image"><Image src={Loader_Image} width={300} height={153} /></div>
      </div>
      {/* <motion.div
        style={{ display: 'flex', whiteSpace: 'nowrap', justifyContent:"center",position:"relative" }}
        animate={{ x: '-100%' }}
        transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
      >
        <motion.div style={{ display: 'inline-block', fontSize:"50px", color:"#83ff31" }} animate={{  y:point.y }} transition={{ type: "spring", damping: 5, stiffness: 200 }}>
          GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL GPT PROTOCOL
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Loader;