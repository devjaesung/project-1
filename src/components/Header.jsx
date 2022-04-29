import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
              <li className='lnb'>
                <Link to="/">
                <a href='#!'>About</a>
                </Link>
              </li>
              <li className='lnb'>
                <Link to="/history">
                <a href='#!'>History</a>
                </Link>
                
                </li>
              <li className='lnb'><a href='#!'>News</a></li>
          </ul>
      </div>
      <hr />
      </div>
     
      </>
    )
  }
}
