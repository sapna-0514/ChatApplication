import React from 'react'
import './ChatBox.css'
const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className='chat-user'>
        <img src={asset.profile_img} alt="" />
        <p>Richard Sansford <img src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} alt=""/>
      </div>
    </div>
  )
}

export default ChatBox
