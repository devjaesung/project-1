import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
        <>
      <div className='head'>
        <div className='logo'>
        <a href='#!'>
          <img src="images/hyundai-logo-white.png" alt='logo'/>
        </a>
      </div>
    
        <div className='nav'>
          <ul className='gnb'>
              <li className='lnb'><a href='#!'>About</a></li>
              <li className='lnb'><a href='#!'>Menu1</a></li>
              <li className='lnb'><a href='#!'>Menu2</a></li>
          </ul>
      </div>
      <hr />
      </div>
     
      </>
    )
  }
}
