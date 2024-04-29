'use client';

import React from 'react';

import { Link } from 'react-scroll';

import menuContent from '../../data/menu.json';

export type ListProps = {
  containerStyle: string;
  itemStyle: string;
  onClick?: () => void;
};

const MenuList: React.FC<ListProps> = ({
  containerStyle,
  itemStyle,
  onClick,
}) => {
  return (
    <ul className={containerStyle}>
      {menuContent.list.map(item => (
        <Link
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={onClick}
          className={itemStyle}
        >
          {item}
        </Link>
      ))}
    </ul>
  );
};

export default MenuList;
