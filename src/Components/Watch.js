import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu, toggleMenu } from '../utils/appSlice';
import { config } from '../utils/constants';
import Comments from './Comments';
import LiveChat from './LiveChat';

const Watch = () => {
  const [comments, seComments] = useState([]);
  const { apiKey, baseUrl } = config;
  const [searchParam] = useSearchParams();
  const videoList = useSelector((store) => store.app.filtereDList);
  const [visibleDescription, setVisibleDescription] = useState(200);

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
    <div className='p-3 pl-20 sm:flex-col'>
      <div className='md:flex md:w-full'>
        <div className='w-full shadow-md'>
          <iframe
            className='rounded-md sm:w-full sm:h-[450px] md:w-[900px] md:h-[550px] pt-3'
            src={'https://www.youtube.com/embed/' + searchParam.get('v')}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
          <ul className='w-auto'>
            {videoList
              .filter((v) => v.id === searchParam.get('v'))
              .map((video) => (
                <div key={video.id}>
                  <li className='font-bold text-lg pt-3'>
                    {video.snippet.title}
                  </li>

                  <li className='text-base py-3 '>
                    <span className='p-2 rounded-2xl font-semibold'>
                      {video.snippet.channelTitle}
                    </span>
                  </li>
                  <li className='bg-gray-200  p-3 sm:w-full rounded-md'>
                    <pre className='text-slate-800 text-sm '>
                      {video.snippet.description.slice(0, visibleDescription)}
                      {visibleDescription <
                        video.snippet.description.length && (
                        <button
                          onClick={() =>
                            setVisibleDescription(
                              video.snippet.description.length
                            )
                          }
                        >
                          ... more
                        </button>
                      )}
                    </pre>
                  </li>
                </div>
              ))}
          </ul>
        </div>
        <div className='md:w-full sm:mt-3'>
          <LiveChat />
        </div>
      </div>
      <div className='md:my-4 sm:mt-3'>
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
