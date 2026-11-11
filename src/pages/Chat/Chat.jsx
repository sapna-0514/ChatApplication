import React from 'react'
import './Chat.css'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSidevar/>
        <ChatBox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Chat
