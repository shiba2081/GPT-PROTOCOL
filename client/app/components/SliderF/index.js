import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.scss"
import { useState } from "react"
import dynamic from 'next/dynamic';
import Card from "../Card"
import CardT from "../CardT";
const Icon = dynamic(()=> import('../Icons'))

// const images = [
//   {image:Slider1,desc:'Exciting news! "GPT_protocol" joins NVIDIA Developer Program, enhancing our AI tools for users.'},
//   {image:Slider2,desc:'Navigating Regulatory Challenges in DePin Innovation'},
//   {image:Slider3,desc:'Buy, Stake & Earn More'}]

export default function SliderF(props) {
    const {images, child, width} = props;
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [opacities, setOpacities] = useState([])
  
    const [sliderRef, instanceRef] = useKeenSlider({
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      breakpoints: {
        "(min-width: 10px)": {
            slides: {perView:1.2, spacing:20}
          },
        "(min-width: 720px)": {
          slides: {perView:3.2, spacing:20}
        },
        "(min-width: 1280px)": {
            slides: {perView:4, spacing:20}
        },
        "(min-width: 1440px)": {
            slides: {perView:4, spacing:20}
        },
      }
    })
  
    return (
    <div className="slider-wrapper-first">
    {/* {width>720 && loaded && instanceRef.current && (
          <>
            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              style={{cursor:"pointer"}}
            ><Icon name='left-arrow' fill='none' width={52} height={52} /></div>
          </>
        )} */}
        <div ref={sliderRef} className="keen-slider">
        {images.map((item,idx)=> {
              return (
              <div
                key={idx}
                className={`keen-slider__slide number-slide${idx+1}`}
                style={{ opacity: opacities[idx] }}
              >
              {child==="third"? <CardT title={item.title} description={item.description} id={item.id}/>:<Card key={idx} img={item.img} title={item.title} description={item.description}/>}
              </div>
        )})}
        
      </div>
      {/* {width>720 && loaded && instanceRef.current && (
          <>

            <div
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              style={{cursor:"pointer"}}
            ><Icon name='right-arrow' fill='none' width={52} height={52} /></div>
          </>
        )} */}
    </div>
    )
  }