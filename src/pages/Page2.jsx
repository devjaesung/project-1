import React,{useState, useEffect, useRef} from 'react'
import Header from '../components/Header'
import './page2.css'
// import styled from 'styled-components'

const Page2 = () => {
  const TOTAL_SLIDES = 2; 
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideRef = useRef(null);

  
  const next = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      
      setCurrentSlide(0);
      
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
 
  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); 

    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.left = `calc(-${currentSlide}00px * 7.5)`; 
    
  }, [currentSlide]);



  return (
    <div className='container'>
      <Header/>
      <div className='mySlider blur'>
        <div className='slide' ref={slideRef}>
        <div className='list blur2'>
          <div className="imgbox">
            <img src="./images/slide01.jpeg" alt="01" />
          </div>
          <div className="txtbox">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Etiam lobortis et libero et finibus.</p>
            <p>Maecenas dignissim odio et dui porta porta.</p>
            <p>Donec aliquam lectus eget porttitor scelerisque.</p>
          </div>
        </div>
        <div className='list blur2'>
        <div className="imgbox">
            <img src="./images/slide02.jpeg" alt="02" />
          </div>
          <div className="txtbox">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Etiam lobortis et libero et finibus.</p>
            <p>Maecenas dignissim odio et dui porta porta.</p>
            <p>Donec aliquam lectus eget porttitor scelerisque.</p>
          </div>
        </div>
        <div className='list blur2'>
        <div className="imgbox">
            <img src="./images/slide03.jpeg" alt="03" />
          </div>
          <div className="txtbox">
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Etiam lobortis et libero et finibus.</p>
            <p>Maecenas dignissim odio et dui porta porta.</p>
            <p>Donec aliquam lectus eget porttitor scelerisque.</p>
          </div>
        </div>
        </div>
      </div>
      <a href='#!'><span className="material-symbols-outlined btn-prev" onClick={prev}>chevron_left</span></a>
      <a href='#!'><span className="material-symbols-outlined btn-next" onClick={next}>chevron_right</span></a>
    </div>
  )
}

export default Page2