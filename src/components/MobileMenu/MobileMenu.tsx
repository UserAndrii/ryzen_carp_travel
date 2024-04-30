import React from 'react';
import cn from 'classnames';

import { MenuBtn, MenuList } from '../Header';

import { menuData } from '@/data';

import { MobileMenuProps } from '@/types';

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpenMenu,
  onClick,
}) => {
  return (
    <div
      className={cn(
        'absolute top-0 w-screen h-screen transition-transform bg-bgMenu backdrop-blur-xl bg-gradient-to-b from-rgba(1, 10, 5, 0.75) to-rgba(1, 10, 5, 0.75) z-10 md:hidden',
        { 'translate-x-0': isOpenMenu },
        { 'translate-x-full': !isOpenMenu }
      )}
    >
      <div className="wrapper pt-[33px] h-screen flex flex-col">
        <MenuBtn
          title={menuData.button.close}
          className="block py-3 ml-auto"
          onClick={onClick}
        />

        <MenuList
          onClick={onClick}
          containerStyle="flex flex-col justify-center items-center gap-12 flex-auto cursor-pointer"
          itemStyle="relative text-menu tracking-wide py-3 active-btn"
        />
      </div>
    </div>
  );
};
