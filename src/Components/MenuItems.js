import React from 'react';

const MenuItems = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={index}
          id={index}
          className='cursor-pointer hover:bg-slate-100 py-3 px-3 rounded-md '
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default MenuItems;
