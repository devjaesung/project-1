import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  render() {
    return (
        <>
      <div className='head'>
        <h1>header</h1>
        <div className='nav'>
          <ul className='gnb'>
              <li><a href='#!'>About</a></li>
              <li><a href='#!'>Menu1</a></li>
              <li><a href='#!'>Menu2</a></li>
          </ul>
      </div>
      <hr></hr>
      </div>
     
      </>
    )
  }
}
