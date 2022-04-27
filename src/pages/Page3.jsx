import React from 'react'
import './page3.css'

const Page3 = () => {
  return (
    <div className='page3'>
      <div className="imgBox">
      <div className='row'>
        <div className='box1 box'>
          <img src="images/img01.jpg"alt="" />
        </div>
        <div className="box2 box">
          <img src="images/img02.jpg" alt="" />
        </div>
      </div>
      <div className='row'>
      <div className='box1 box'>
          <img src="images/img03.jpg" alt="" />
        </div>
        <div className="box2 box">
          <img src="images/img04.jpg" alt="" />
        </div>
        <div className="box3 box">
          <img src="images/img05.jpg" alt="" />
        </div>
      </div>
      <div className="row">
      <div className='box2 box'>
          <img src="images/img06.jpg" alt="" />
        </div>
        <div className="box1 box">
          <img src="images/img07.jpg" alt="" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page3