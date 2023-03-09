import React from 'react';
import Navbar from '../Navbar/Navbar';
import MainBhadaas from './MainBhadaas';

function LandingPage() {
  return (
    <div className='landingpage'>
      <Navbar />
      <div className='main-container'>
        <MainBhadaas />
        <div className='cta flex'>
          <h4>Let your Bhadaas out</h4>
          <button className='primary-btn'>Let's Go!</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
