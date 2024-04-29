import React from 'react';
import cn from 'classnames';

export interface TitleProps {
  className?: string;
  accent: string;
  content: string;
}

const Title: React.FC<TitleProps> = ({ className, accent, content }) => {
  return (
    <h2 className={cn('title-bold', className)}>
      <span className="title">{content}</span> {accent}
    </h2>
  );
};

export default Title;
