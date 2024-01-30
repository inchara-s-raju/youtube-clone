import React from 'react';

const VideoCard = ({ videoInfo }) => {
  return (
    <div className='w-80 p-2'>
      <img
        className='rounded-xl cursor-pointer'
        src={videoInfo.snippet.thumbnails.high.url}
        alt='thumbnail'
      ></img>
      <ul>
        <li className='text-base font-bold '>{videoInfo.snippet.title}</li>
        <li>{videoInfo.snippet.channelTitle}</li>
        <li className='text-sm'>{videoInfo.statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
