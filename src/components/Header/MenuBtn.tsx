import cn from 'classnames';
import React from 'react';

export type MenuBtnProps = {
  title: string;
  onClick: () => void;
  className?: string;
};

const MenuBtn: React.FC<MenuBtnProps> = ({ title, onClick, className }) => {
  return (
    <button
      className={cn(
        'relative active-btn text-md tracking-wide link-pointing md:hidden',
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default MenuBtn;
