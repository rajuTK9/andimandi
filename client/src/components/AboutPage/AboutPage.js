import React from 'react';
import './AboutPage.css'
import Navbar from '../Navbar/Navbar';

function AboutPage() {
  return (
    <div className='aboutpage'>
      <Navbar />
      <div className='main-container'>
        <p className='about-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br /><br />
            Mi eget mauris pharetra et ultrices neque ornare aenean. Id nibh tortor id aliquet. Viverra accumsan in nisl nisi scelerisque eu. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Imperdiet dui accumsan sit amet nulla. Iaculis urna id volutpat lacus laoreet non curabitur. 
        </p>
      </div>
    </div>
  )
}

export default AboutPage
