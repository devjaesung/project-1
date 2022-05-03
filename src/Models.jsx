import React from 'react'
import './models.css'
import Header from './components/Header'

const Models = () => {
  return (
    <>
     <Header />
     <div className='models'>
        <h1>Models</h1>
        <div className='m-row'>
        <div className='models-box blur'>
            <div className="imgbox">
                <img src="images/model1.png" alt="" />
            </div>
            <h3>model1</h3>
            <p>description</p>
        </div> 
        <div className='models-box blur'>
            <div className="imgbox">
            <img src="images/model1.png" alt="" />
            </div>
            <h3>model2</h3>
            <p>description</p>
        </div>
        </div>
        <div className='m-row'>
        <div className='models-box blur'>
            <div className="imgbox">
                <img src="images/model1.png" alt="" />
            </div>
            <h3>model3</h3>
            <p>description</p>
        </div> 
        <div className='models-box blur'>
            <div className="imgbox">
                <img src="images/model1.png" alt="" />
            </div>
            <h3>model4</h3>
            <p>description</p>
        </div>
        </div> <div className='m-row'>
        <div className='models-box blur'>
            <div className="imgbox">
                <img src="images/model1.png" alt="" />
            </div>
            <h3>model5</h3>
            <p>description</p>
        </div> 
        <div className='models-box blur'>
            <div className="imgbox">
                <img src="images/model1.png" alt="" />
            </div>
            <h3>model6</h3>
            <p>description</p>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Models