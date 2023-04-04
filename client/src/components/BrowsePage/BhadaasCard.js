import React from 'react'
import './BrowsePage.css'
import LikeButton from '../Miscellanous/LikeButton'

function BhadaasCard(props) {
  return (
    <div className='bhadaas-card'>
      <p>{props.text}</p>
      <div className='flex'>
        <LikeButton count={5} />
        <button className='secondary-btn'>View</button>
      </div>
    </div>
  )
}

export default BhadaasCard
