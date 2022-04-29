import React from 'react'
import { Link } from 'react-router-dom'
import './list.css'

const List3 = () => {
  return (
    <>
<div className='list-con'>
      <div className="list-img-box">
        <img src="images/img03.jpg" alt="01" />
      </div>
      <div className="list-text-box">
        <h2>Proin et ante vitae sapien iaculis feugiat.</h2>
        
        <p>Proin et ante vitae sapien iaculis feugiat. Cras vel auctor diam. Quisque egestas ante id rhoncus auctor. Aenean risus metus, condimentum non elit ac, ultrices volutpat ligula. Quisque at enim urna. Aliquam ullamcorper facilisis metus sed ultrices. Quisque auctor, erat sit amet rutrum tristique, ante sem cursus nibh, id elementum tortor leo ut felis.</p>
        <p>Proin et ante vitae sapien iaculis feugiat. Cras vel auctor diam. Quisque egestas ante id rhoncus auctor. Aenean risus metus, condimentum non elit ac, ultrices volutpat ligula. Quisque at enim urna. Aliquam ullamcorper facilisis metus sed ultrices. Quisque auctor, erat sit amet rutrum tristique, ante sem cursus nibh, id elementum tortor leo ut felis.</p>
      </div>
    </div>
    <div className="back">
    <Link to="/">
      <a href='#!'>
        <span class="material-symbols-outlined" id='undo'>undo</span>
      </a>
    </Link>
    </div>
    </>
  )
}

export default List3