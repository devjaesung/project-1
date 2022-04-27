import React, { Component } from 'react'
import './page1.css'
import sample from '../videos/bg-video.webm'

export default class Page1 extends Component {
  render() {
    return (
    <div className='page1'>
      <div id='textBox'>
        <h1>New</h1>
        <h1>Thinking,</h1>
        <h1>New</h1>
        <h1>Possibilities</h1>
      </div>
      <div>
      <video className='videoTag' autoPlay loop muted>
        <source src={sample} type='video/webm' />
      </video>
      </div>
    </div>
    )
  }
}
