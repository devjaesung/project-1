import React from 'react'
import { Link } from 'react-router-dom'
import './page3.css'



const Page3 = () => {
  return (
    <div className='page3'>
      <div className="imgBox">
      <div className='row'>
        <div className='box1 box'>
        <Link to="/list1">
          <img src="images/img01.jpg"alt="" />
        </Link>
        </div>
     
        <div className="box2 box">
        <Link to="/list2">
          <img src="images/img02.jpg" alt="" />
        </Link>
        </div>
      </div>
      <div className='row'>
      <div className='box1 box'>
      <Link to="/list3">
          <img src="images/img03.jpg" alt="" />
        </Link>
        </div>
        <div className="box2 box">
        <Link to="/list4">
          <img src="images/img04.jpg" alt="" />
          </Link>
        </div>
        <div className="box3 box">
        <Link to="/list5">
          <img src="images/img05.jpg" alt="" />
          </Link>
        </div>
      </div>
      <div className="row">
      <div className='box2 box'>
      <Link to="/list6">
          <img src="images/img06.jpg" alt="" />
          </Link>
        </div>
        <div className="box1 box">
        <Link to="/list7">
          <img src="images/img07.jpg" alt="" />
          </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Page3