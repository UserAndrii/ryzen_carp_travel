'use client';

import React from 'react';

import { Link } from 'react-scroll';

import menuContent from '../../data/menu.json';

export type ListProps = {
  onClick: () => void;
};

const List: React.FC<ListProps> = ({ onClick }) => {
  return (
    <ul className="flex flex-col justify-center items-center gap-12 flex-auto cursor-pointer">
      {menuContent.list.map(item => (
        <Link
          key={item}
          to={item}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={onClick}
          className="relative text-menu tracking-wide py-3 active-btn "
        >
          {item}
        </Link>
      ))}
    </ul>
  );
};

export default List;
