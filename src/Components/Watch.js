import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu, toggleMenu } from '../utils.js/appSlice';
import { config } from '../utils.js/constants';
import Comments from './Comments';
import LiveChat from './LiveChat';

const Watch = () => {
  const [comments, seComments] = useState([]);
  const { apiKey, baseUrl } = config;
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchComments();

    return () => {
      dispatch(toggleMenu());
    };
  }, []);

  const fetchComments = async () => {
    const res = await fetch(baseUrl + searchParam.get('v') + '&key=' + apiKey);
    const data = await res.json();
    seComments(data.items);
    // console.log(data.items);
  };
  return (
    <div className='p-3 pl-20'>
      <div className='flex w-full'>
        <div className='w-full'>
          <iframe
            className='rounded-lg'
            width='1000'
            height='550'
            src={'https://www.youtube.com/embed/' + searchParam.get('v')}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
        <div className='w-full'>
          <LiveChat />
        </div>
      </div>
      <div className='my-4 '>
        <h1 className='font-bold text-2xl'>Comments</h1>
        <CommentsList comments={comments} />
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments?.map((comment, index) => (
        <div key={index}>
          <Comments data={comment} />
          {/* {console.log(comment?.replies?.comments)} */}
          {comment?.replies?.comments &&
            comment?.replies?.comments?.map((r) => (
              <div className='ml-7 p-3 border border-l-black w-[923px]'>
                <h2 className='font-bold'>{r?.snippet?.authorDisplayName}</h2>
                <h3>{r?.snippet?.textOriginal}</h3>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};
export default Watch;
