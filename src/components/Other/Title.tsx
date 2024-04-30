import React from 'react';
import cn from 'classnames';

import { TitleProps } from '@/types';

export const Title: React.FC<TitleProps> = ({ className, accent, content }) => {
  return (
    <h2 className={cn('title-bold', className)}>
      <span className="title">{content}</span> {accent}
    </h2>
  );
};
