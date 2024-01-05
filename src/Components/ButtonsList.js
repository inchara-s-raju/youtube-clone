import React from 'react';
import Button from './Button';

const ButtonsList = () => {
  const buttons = [
    'All',
    'JavaScript',
    'Mixes',
    'Cricket',
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
    <div>
      <Button buttons={buttons} />
    </div>
  );
};

export default ButtonsList;
