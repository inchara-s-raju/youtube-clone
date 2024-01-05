import React from 'react';

const VideoCard = ({ videoInfo }) => {
  return (
    <div className='p-2 w-1/4' id={videoInfo.id}>
      {/* <iframe
            className='rounded-xl'
            width='400'
            height='250'
            src={'https://www.youtube.com/embed/' + video.id}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe> */}
      <ul>
        <img
          className='rounded-xl cursor-pointer'
          src={videoInfo.snippet.thumbnails.medium.url}
          alt='thumbnail'
        ></img>
        <li className='text-base font-bold '>{videoInfo.snippet.title}</li>
        <li>{videoInfo.snippet.channelTitle}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
