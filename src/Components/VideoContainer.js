import React, { useEffect } from 'react';
import VideoCard from './VideoCard';
import { YOUTUBE_VEDIO_API } from '../utils.js/constants';
import { useDispatch, useSelector } from 'react-redux';
import { setVideoList, setFilteredList } from '../utils.js/appSlice';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const dispatch = useDispatch();
  const videoList = useSelector((store) => store.app.videoList);
  const filtereDList = useSelector((store) => store.app.filtereDList);
  useEffect(() => {
    fetchVideoList();
  }, []);

  const fetchVideoList = async () => {
    const res = await fetch(YOUTUBE_VEDIO_API);

    const data = await res.json();

    dispatch(setVideoList(data.items));
    dispatch(setFilteredList(data.items));
  };
  if (videoList === null) return null;
  return (
    <div className='p-2 flex flex-wrap '>
      {filtereDList.map((videoInfo) => (
        <Link to={'/watch?v=' + videoInfo.id} key={videoInfo.id}>
          <VideoCard videoInfo={videoInfo} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
