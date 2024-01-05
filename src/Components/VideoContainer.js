import React, { useEffect } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VEDIO_API } from '../utils.js/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoList } from '../utils.js/appSlice';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.app.videoList);
  useEffect(() => {
    fetchVideoList();
  }, []);
  const fetchVideoList = async () => {
    const res = await fetch(YOUTUBE_VEDIO_API);
    const data = await res.json();
    dispatch(setVideoList(data.items));
  };
  return (
    <div className='p-3 flex flex-wrap'>
      {videoList.map((videoInfo) => (
        <VideoCard videoInfo={videoInfo} />
      ))}
    </div>
  );
};

export default VideoContainer;
