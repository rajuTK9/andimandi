import React from 'react'
import './SideBar.css'
import SideButton from './SideButton'

function SideBar() {
  return (
    <div className='sidebar'>
      <SideButton name='Top' />
      <SideButton name='New' />
      <SideButton name='Random' />
      <SideButton name='Liked' />
    </div>
  )
}

export default SideBar
