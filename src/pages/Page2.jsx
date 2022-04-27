import React,{useState, useEffect, useRef} from 'react'
import Header from '../components/Header'
import './page2.css'
import styled from 'styled-components'

const Page2 = () => {
  const TOTAL_SLIDES = 2; //배열로 계산
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  // Next 버튼 클릭 시
  const next = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면
      setCurrentSlide(0); // 1번째 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  // Prev 버튼 클릭 시
  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); // 마지막 사진으로 넘어갑니다.
      // return;  // 클릭이 작동하지 않습니다.
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);



  return (
    <div className='container'>
      <Header/>
      <div className='mySlider'>
        <div className='slide' ref={slideRef}>
        <div className='list blur'>
          list1
        </div>
        <div className='list blur'>
          list2
        </div>
        <div className='list blur'>
          list3
        </div>
        </div>
      </div>
      <a href='#!'><span class="material-symbols-outlined" onClick={prev}>chevron_left</span></a>
      <a href='#!'><span class="material-symbols-outlined" onClick={next}>chevron_right</span></a>
    </div>
  )
}

export default Page2