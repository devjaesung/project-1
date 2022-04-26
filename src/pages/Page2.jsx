import React, { Component } from 'react'
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css';
import './page2.css'

export default class Page2 extends Component {
  render() {
    const settings = { 
      dots: true, 
      infinite: true, 
      speed: 500, 
      slidesToShow: 1, 
      slidesToScroll: 1
    };

    return (      
      <div className='container'> 
   
        <div className='mySlide'>
        <Slider {...settings}> 
        <div className='slideIn'> 
          <div className='imgbox'>
            <img src='images/001.jpg' alt='001' />  
          </div>
          <div className='textbox'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>Sed imperdiet augue at vulputate varius. Suspendisse a dignissim metus, et accumsan elit. Duis commodo sollicitudin nisi, in aliquam nisi gravida eget.</p>
            <p>
            Vivamus eget ipsum erat. Maecenas aliquet rhoncus diam id luctus. Sed pharetra erat vitae ultricies tempor. Vestibulum ac tempor lacus, eu pulvinar libero. 
            </p>
          </div>
        </div> 
        <div className='slideIn'> 
        <div className='imgbox'>
            <img src='images/002.jpg' alt='002' />  
          </div>
          <div className='textbox'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>Sed imperdiet augue at vulputate varius. Suspendisse a dignissim metus, et accumsan elit. Duis commodo sollicitudin nisi, in aliquam nisi gravida eget.</p>
            <p>
            Vivamus eget ipsum erat. Maecenas aliquet rhoncus diam id luctus. Sed pharetra erat vitae ultricies tempor. Vestibulum ac tempor lacus, eu pulvinar libero. 
            </p>
          </div>
        </div>
        <div className='slideIn'> 
        <div className='imgbox'>
            <img src='images/003.jpg' alt='003' />  
          </div>
          <div className='textbox'>
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
            <p>Sed imperdiet augue at vulputate varius. Suspendisse a dignissim metus, et accumsan elit. Duis commodo sollicitudin nisi, in aliquam nisi gravida eget.</p>
            <p>
            Vivamus eget ipsum erat. Maecenas aliquet rhoncus diam id luctus. Sed pharetra erat vitae ultricies tempor. Vestibulum ac tempor lacus, eu pulvinar libero. 
            </p>
          </div>
        </div>
        </Slider>
        </div>
      </div>

    )
  }
}
