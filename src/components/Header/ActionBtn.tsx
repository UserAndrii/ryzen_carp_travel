import React from 'react';

import { Link } from 'react-scroll';

import { menuData } from '@/data';

export const ActionBtn: React.FC = () => {
  return (
    <Link
      to={menuData.list[4]}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="relative flex justify-center items-center font-bold text-menu w-full h-[53px] bg-btnBg hover:bg-btnBgActive focus:bg-btnBgActive transition overflow-hidden cursor-pointer md:h-[50px] lg:text-[32px]/[39px] lg:h-[71px]"
    >
      <span className="left"></span>
      <span className="front"></span>
      <span className="right"></span>
      <span className="behind"></span>
      JOIN NOW
    </Link>
  );
};
