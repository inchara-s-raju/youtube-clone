import React from 'react';

const Button = ({ buttons }) => {
  return (
    <div className='flex'>
      {buttons.map((button, index) => (
        <div className='p-2 bg-slate-300 mx-2 rounded-lg hover:bg-slate-400'>
          <button index={index}>{button}</button>
        </div>
      ))}
    </div>
  );
};

export default Button;
