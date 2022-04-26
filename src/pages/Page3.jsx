import React,{useState} from 'react'
import Header from '../components/Header'
import './page3.css'
import styled from 'styled-components'

const Page3 = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='mySlider'>
        <div className='slide'>
        <div className='list'>
          list1
        </div>
        <div className='list'>
          list2
        </div>
        <div className='list'>
          list3
        </div>
        </div>
      </div>
      <span class="material-symbols-outlined">chevron_left</span>
      <span class="material-symbols-outlined">chevron_right</span>
    </div>
  )
}

export default Page3