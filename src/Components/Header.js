import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilteredList, toggleMenu } from '../utils.js/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils.js/constants';
import { cacheResults } from '../utils.js/searchSlice';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [suggestions, setSuggestions] = useState('');
  const [showSuggestion, setShowSuggestion] = useState(false);
  const videoList = useSelector((store) => store.app.videoList);
  const cacheResult = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const handleListClick = (e) => {
    console.log('hello', e);
  };

  useEffect(() => {
    if (cacheResult[searchQuery]) {
      setSuggestions(cacheResult[searchQuery]);
    } else {
      const timer = setTimeout(() => getSearchSuggetion(), 200);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await res.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const handleSearchClick = () => {
    const filtered = videoList.filter((video) =>
      video.snippet.description
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    dispatch(setFilteredList(filtered));
  };

  return (
    <div className='grid grid-flow-col p-5 m-0 shadow-md '>
      <div className='flex col-span-1'>
        <img
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII='
          alt='menu'
          className='w-9 h-10 cursor-pointer'
          onClick={toggleMenuHandler}
        ></img>
        <img
          src='https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg'
          alt='youtube-logo'
          className='w-32 h-12 mx-auto'
        ></img>
      </div>
      <div className='col-span-10 mx-auto'>
        <input
          type='text'
          placeholder='search'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='bg-gray-100 h-10 border border-solid border-gray-300 w-96 rounded-s-full px-3'
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        ></input>

        <button
          className='bg-gray-300 h-10 pl-4 pr-4 rounded-e-full'
          onClick={handleSearchClick}
        >
          search
        </button>
        {showSuggestion && (
          <div className='absolute bg-white w-96 rounded-md'>
            <ul>
              {suggestions &&
                suggestions.map((suggestion) => (
                  <li
                    onClick={() => handleListClick(suggestion)}
                    key={suggestion}
                    className='px-2 py-1 hover:bg-slate-100 rounded-full hover:cursor-pointer'
                  >
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <div className='col-span-1'>
        <img
          src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'
          alt='user-logo'
          className='w-12 h-10'
        ></img>
      </div>
    </div>
  );
};

export default Header;
