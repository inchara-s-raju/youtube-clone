import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const items = [
    'shorts',
    'videos',
    'music',
    'sports',
    'gaming',
    'movies',
    'songs',
    'sports',
  ];
  // Early return Pattern
  if (!isMenuOpen) return null;
  return (
    <div className='col-span-2 shadow-lg p-5 w-44 '>
      <Link to='/'>
        {' '}
        <h1 className='font-bold py-1 px-3'>Home</h1>
      </Link>
      <MenuItems items={items.slice(0, 5)} />
      <h1 className='font-bold py-1 px-3'>Explore</h1>
      <MenuItems items={items} />
    </div>
  );
}

export default Sidebar;
