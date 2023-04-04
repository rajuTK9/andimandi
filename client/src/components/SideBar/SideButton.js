import React from 'react'

function SideButton(props) {
  return (
    <div className={`side-btn ${props.active}`} onClick={props.click}>
        {props.name}
    </div>
  )
}

export default SideButton
