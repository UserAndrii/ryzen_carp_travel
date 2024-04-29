import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

export type SlideProp = {
  isActive: boolean;
  img: string;
  alt: string;
};

const Slide: React.FC<SlideProp> = ({ isActive, img, alt }) => {
  return (
    <div
      className={cn(
        'image-wrapper relative h-[187px] transition-all duration-[600ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]',
        {
          'before:hidden md:w-[415px] md:h-[294px] lg:w-[606px] lg:h-[429px]  opacity-1':
            isActive,
          'md:w-[120px] md:h-[86px] lg:w-[313px] lg:h-[225px] opacity-0.75':
            !isActive,
        }
      )}
    >
      <Image
        src={img}
        alt={alt}
        fill
        sizes="(max-width: 480px) 280px, (max-width: 1279px) 415px, 606px"
        className="object-cover"
        priority
      />
    </div>
  );
};

export default Slide;
