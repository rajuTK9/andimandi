import React from 'react';
import './LandingPage.css'
import LikeButton from '../Miscellanous/LikeButton';

function MainBhadaas() {
  return (
    <div className='mainbhadaas'>
      <h1 className='bhadaas-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</h1>
      <div className='flex'>
        <LikeButton count={34} />
        <p className='info'>*They paid us to display this</p>
      </div>

    </div>
  )
}

export default MainBhadaas
