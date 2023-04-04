import React from 'react';
import './FormPage.css';
import Navbar from '../Navbar/Navbar';

function FormPage() {
  return (
    <div className='formpage'>
        <Navbar />
      <div className='main-container flex'>
        <div className='disclaimer'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <br />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <textarea placeholder='Write your bhadaas here...'></textarea>
            <button className='primary-btn'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default FormPage
