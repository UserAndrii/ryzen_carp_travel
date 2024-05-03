import cn from 'classnames';
import React from 'react';

import { MenuBtnProps } from '@/types';

export const MenuBtn: React.FC<MenuBtnProps> = ({
  title,
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
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
