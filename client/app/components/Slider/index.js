import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.scss"
import Slider2 from "../../assets/img/Home/News/slider2.png"
import Slider3 from "../../assets/img/Home/News/slider3.png"
import Image from 'next/image';
import { useState } from "react"
import dynamic from 'next/dynamic';
const Icon = dynamic(()=> import('../Icons'))

// const images = [
//   {image:Slider1,desc:'Exciting news! "GPT_protocol" joins NVIDIA Developer Program, enhancing our AI tools for users.'},
//   {image:Slider2,desc:'Navigating Regulatory Challenges in DePin Innovation'},
//   {image:Slider3,desc:'Buy, Stake & Earn More'}]

export default function Slider(props) {
    const {images, child, width} = props;
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [opacities, setOpacities] = useState([])

    const openLink = (label) => {
      window.open(label)
      // if (label==="Slider1") {
      //   window.open("https://x.com/craigosullivan/status/1770500267412164720?s=46")
      // } else if (label==="Slider2") {
      //   window.open("https://x.com/gpt_protocol/status/1772709282317754506?s=46")
      // } else if (label==="Slider3") {
      //   window.open("https://staking.gptprotocol.org/")
      // }
    }

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
        slides: images.length,
        loop: true,
        detailsChanged(s) {
            const new_opacities = s.track.details.slides.map((slide) => slide.portion)
            setOpacities(new_opacities)
        },
    })
  
    return (
    <div className="slider-wrapper">
    {loaded && instanceRef.current && (
          <>
            <div
            className="left-arrow"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              style={{cursor:"pointer"}}
            >{width>720 ? <Icon name='left-arrow' fill='none' width={52} height={52} />:<Icon name='arrow-right' fill='white' width={20} height={20} />}</div>
          </>
        )}
        
      <div ref={sliderRef} className="fader"
      
      // onClick={(e) =>
      //           e.stopPropagation() || instanceRef.current?.next()
      //         }
              >
        {images.map((src, idx) => (
          <div
          >
          <div
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
          {src.image==="Slider1"?
          <video autoPlay loop muted playsInline>
          <source src="/slider1.mp4" type="video/mp4" />
        </video>:
          <Image src={src.image==="Slider2"? Slider2:Slider3} />}
            
          </div>
          <div key={idx}
            className="fader__slide src-desc"
            style={{ opacity: opacities[idx], zIndex: opacities[idx] }}>
            <div className="desc">{src.desc}</div>
            <div className="learn c-p" onClick={()=>openLink(src.url)}>Learn More{width>720 ?<Icon name='arrow-left' fill='#000' width={24} height={24} />:<Icon name='arrow-left' fill='#000' width={24} height={24} />}</div></div>
          </div>
        ))
        }
      </div>
      {loaded && instanceRef.current && (
          <>

            <div
              className="right-arrow"
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              style={{cursor:"pointer"}}
            >{width>720 ? <Icon name='right-arrow' fill='none' width={52} height={52} />:<Icon name='arrow-left' fill='white' width={20} height={20} />}</div>
          </>
        )}
    </div>
    )
  }