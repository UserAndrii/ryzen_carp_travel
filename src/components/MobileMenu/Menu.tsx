import React from 'react';

import { MenuBtn } from '../Header';

import menuContent from '../../data/menu.json';
import List from './List';
import cn from 'classnames';

export type MenuProps = {
  isOpenMenu: boolean;
  onClick: () => void;
};

const Menu: React.FC<MenuProps> = ({ isOpenMenu, onClick }) => {
  return (
    <div
      className={cn(
        'absolute top-0 w-screen h-screen transition-transform translate-x-full bg-bgMenu backdrop-blur-xl bg-gradient-to-b from-rgba(1, 10, 5, 0.75) to-rgba(1, 10, 5, 0.75) z-10',
        { 'translate-x-0': isOpenMenu }
      )}
    >
      <div className="wrapper pt-[33px] h-screen flex flex-col">
        <MenuBtn
          title={menuContent.button.close}
          className="block py-3 ml-auto"
          onClick={onClick}
        />

        <List onClick={onClick} />
      </div>
    </div>
  );
};

export default Menu;
