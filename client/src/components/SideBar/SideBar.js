import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SideBar.css'
import SideButton from './SideButton'

function SideBar() {
  const [isActive, setActive] = useState(window.location.pathname.slice(1, window.location.pathname.length));
  const navigate = useNavigate();

  function HandleClick(set) {
      setActive(set);
      navigate('/' + set);
  }

  return (
    <div className='sidebar'>
      <SideButton name='Top' active={isActive === 'top' ? 'active' : null} click={() => {HandleClick('top')}} />
      <SideButton name='New' active={isActive === 'new' ? 'active' : null} click={() => {HandleClick('new')}} />
      <SideButton name='Random' active={isActive === 'random' ? 'active' : null} click={() => {HandleClick('random')}} />
      <SideButton name='Liked' active={isActive === 'liked' ? 'active' : null} click={() => {HandleClick('liked')}} />
    </div>
  )
}

export default SideBar
