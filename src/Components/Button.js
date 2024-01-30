import React from 'react';

const Button = ({ buttons }) => {
  return (
    <div className='flex'>
      {buttons.map((button, index) => (
        <div
          className='p-2 bg-gray-300 mx-2 rounded-lg hover:bg-gray-400'
          key={index}
        >
          <button index={index}>{button}</button>
        </div>
      ))}
    </div>
  );
};

export default Button;
