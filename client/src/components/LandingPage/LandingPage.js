import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import MainBhadaas from './MainBhadaas';

function LandingPage() {
  const navigate = useNavigate();

  function HandleClick(route) {
    navigate('/' + route);
  }

  return (
    <div className='landingpage'>
      <Navbar />
      <div className='main-container'>
        <MainBhadaas />
        <div className='cta flex'>
          <h4>Let your Bhadaas out</h4>
          <button className='primary-btn' onClick={() => {HandleClick('form')}}>Let's Go!</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
