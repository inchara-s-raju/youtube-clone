import React from 'react';

const MenuItems = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li id={index}>{item}</li>
      ))}
    </ul>
  );
};

export default MenuItems;
