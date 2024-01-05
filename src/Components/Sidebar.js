import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';

function Sidebar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const items = [
    'Home',
    'shorts',
    'videos',
    'music',
    'sports',
    'gaming',
    'movies',
    'songs',
    'sports',
    'sandalhood',
    'hollyhood',
    'bollyhood',
  ];
  return (
    isMenuOpen && (
      <div className='col-span-1 shadow-lg p-3 '>
        <h1 className='font-bold'>Subscription</h1>
        <MenuItems items={items.slice(0, 6)} />
        <h1 className='font-bold'>Explore</h1>
        <MenuItems items={items} />
        <h1 className='font-bold'>Watch Later</h1>
        <MenuItems items={items.slice(0, 5)} />
      </div>
    )
  );
}

export default Sidebar;
