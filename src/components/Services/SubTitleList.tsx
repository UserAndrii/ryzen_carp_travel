import React from 'react';
import cn from 'classnames';

interface SubTitleListProps {
  subtitles: string[];
  activeSlide: number;
  swiperRef: any;
}

const SubTitleList: React.FC<SubTitleListProps> = ({
  subtitles,
  activeSlide,
  swiperRef,
}) => {
  return (
    <ul className="flex flex-col gap-4 md:mb-[25px]">
      {subtitles?.map((item, index) => (
        <li
          key={index}
          className={cn('flex items-center', {
            'service-call': activeSlide === index,
          })}
        >
          <button
            className={cn(
              'font-extralight text-slide text-left w-full uppercase md:text-slide_tab',
              {
                'opacity-50 hover:pl-1 hover:opacity-100 transition-all duration-500 easy-in-out':
                  activeSlide !== index,
                'font-medium opacity-100': activeSlide === index,
              }
            )}
            onClick={() => swiperRef.current?.swiper.slideTo(index)}
            dangerouslySetInnerHTML={{ __html: item }}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default SubTitleList;
