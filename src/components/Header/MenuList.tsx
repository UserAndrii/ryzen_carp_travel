'use client';

import React from 'react';

import { Link } from 'react-scroll';

import { menuData } from '@/data';

import { MenuListProps } from '@/types';

export const MenuList: React.FC<MenuListProps> = ({
  containerStyle,
  itemStyle,
  onClick,
}) => {
  return (
    <ul className={containerStyle}>
      {menuData.list.map(item => (
        <li key={item}>
          <Link
            to={item}
            href="#"
            smooth={true}
            offset={0}
            duration={500}
            onClick={onClick}
            className={itemStyle}
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};
