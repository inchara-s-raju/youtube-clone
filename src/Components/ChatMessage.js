import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className='flex items-center px-2 shadow-sm'>
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
        alt='user-logo'
        className='w-12 h-10'
      ></img>

      <span className='font-bold px-2'>{message.name}</span>

      <span>{message.message}</span>
    </div>
  );
};

export default ChatMessage;
