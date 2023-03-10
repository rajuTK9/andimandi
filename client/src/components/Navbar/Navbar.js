import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  function HandleClick(route) {
    navigate('/' + route);
  }
  return (
    <div className='navbar'>
      <h1 className='logo' onClick={() => {HandleClick('')}}>Bhadaas</h1>
      <ul className='navlinks'>
        <li onClick={() => {HandleClick('about')}}>About</li>
        <li>Pay us</li>
        <li onClick={() => {HandleClick('browse')}}>Browse</li>
      </ul>
    </div>
  )
}

export default Navbar
