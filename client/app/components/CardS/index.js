import { useEffect, useState } from 'react';
import './style.scss'
import Image from 'next/image';

export default function CardS(props) {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined'? window.innerWidth:0,
    height: typeof window !== 'undefined'? window.innerHeight:0,
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

  return (
    <div className='card-default cardS' style={{top: (props.id===2||props.id===5) && (screenSize.width>720? "136px":"92px")}}>
      <div className='card-detail'>
        <div className='cards-title'>{props.title}</div>
        <div className='cards-desc'>{props.description}</div>
      </div>
    </div>
  );
}
