import React from 'react'
import Header from './components/Header'
import './history.css'

const History = () => {
  return (
    <>
     <Header />
     <div className='history'>
       <h1>History About Hyundai</h1>
      <div className="left-box">
        <div className='history-box blur'>
          <h1>history</h1>
            <p>Proin et ante vitae sapien iaculis feugiat. Cras vel auctor diam. Quisque egestas ante id rhoncus auctor. Aenean risus metus, condimentum non elit ac, ultrices volutpat ligula. Quisque at enim urna. Aliquam ullamcorper facilisis metus sed ultrices. Quisque auctor, erat sit amet rutrum tristique, ante sem cursus nibh, id elementum tortor leo ut felis.</p>
        </div>
        <div className="h-img">
          <img src="images/img01.jpg" alt="" />
        </div>
      </div>
      <div className="right-box">
      <div className="h-img">
          <img src="images/img02.jpg" alt="" />
        </div>
        <div className='history-box blur'>
          <h1>history</h1>
            <p>Proin et ante vitae sapien iaculis feugiat. Cras vel auctor diam. Quisque egestas ante id rhoncus auctor. Aenean risus metus, condimentum non elit ac, ultrices volutpat ligula. Quisque at enim urna. Aliquam ullamcorper facilisis metus sed ultrices. Quisque auctor, erat sit amet rutrum tristique, ante sem cursus nibh, id elementum tortor leo ut felis.</p>
        </div>
      </div>
      <div className="left-box">
        <div className='history-box blur'>
          <h1>history</h1>
            <p>Proin et ante vitae sapien iaculis feugiat. Cras vel auctor diam. Quisque egestas ante id rhoncus auctor. Aenean risus metus, condimentum non elit ac, ultrices volutpat ligula. Quisque at enim urna. Aliquam ullamcorper facilisis metus sed ultrices. Quisque auctor, erat sit amet rutrum tristique, ante sem cursus nibh, id elementum tortor leo ut felis.</p>
        </div>
        <div className="h-img">
          <img src="images/img01.jpg" alt="" />
        </div>
      </div>
    </div>
    </>
   
    
  )
}

export default History