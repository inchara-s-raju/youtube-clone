import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { setLiveChat } from '../utils.js/liveChatSlice';
import { generateRandomMessage, generateRandomName } from '../utils.js/helper';

const LiveChat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.liveChat.messages);
  const [liveMessage, setLiveMessage] = useState('');

  useEffect(() => {
    //API Polling
    let timer = setInterval(() => {
      dispatch(
        setLiveChat({
          name: generateRandomName(),
          message: generateRandomMessage(),
        })
      );
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setLiveChat({ name: 'inchara', message: liveMessage }));
    setLiveMessage(' ');
  };
  return (
    <>
      <div className='w-full h-[550px] ml-2 p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {messages.map((message, index) => (
          <ChatMessage message={message} key={index} />
        ))}
      </div>
      <div className='ml-2 p-2'>
        <div className='flex gap-2 p-1'>
          <img
            src='https://yt4.ggpht.com/ytc/AIf8zZQyD7CrfxYA3hRbqQKMer-GQRabb5N2m3H-_xH1j2CqvxyWKQNYCOYj-mVaR7gb=s32-c-k-c0x00ffffff-no-rj'
            alt='user-logo'
            className='rounded-full'
          ></img>
          <label>Inchara</label>
        </div>
        <form className='flex' onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='chat...'
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className='w-5/6 p-2 border border-b-black focus:outline-none'
          ></input>
          <button className='w-1/6 border border-b-black'>Send</button>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
