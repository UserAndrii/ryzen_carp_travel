'use client';

import 'swiper/css';
import 'swiper/css/keyboard';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import React from 'react';
import Image from 'next/image';
import cn from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import galleryContent from '../../data/gallery.json';

const Slide: React.FC = () => {
  return (
    <div className="relative max-w-[480px] mx-auto">
      <Swiper
        className="gallery h-[609px]"
        wrapperTag="ul"
        direction={'vertical'}
        modules={[Navigation]}
        initialSlide={1}
        slidesPerView={3}
        spaceBetween={24}
        centeredSlides={true}
        speed={800}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: '.next-btn',
          prevEl: '.prev-btn',
        }}
        breakpoints={{
          768: {
            direction: 'horizontal',
          },
        }}
      >
        {galleryContent.slides.map(({ img, alt }, index) => (
          <SwiperSlide
            tag="li"
            key={index}
            className="slider max-w-[280px] mx-auto"
          >
            {({ isActive }) => (
              <div
                className={cn(
                  'image-wrapper relative h-[187px] w-[280px] transition',
                  {
                    'before:hidden md:h-[294px] md:w-[415px] lg:h-[429px] lg:w-[606px] opacity-1':
                      isActive,
                    'before:hidden md:before:visible md:h-[86px] md:w-[120px] lg:h-[225px] lg:w-[313px] opacity-0.5':
                      !isActive,
                  }
                )}
              >
                <Image
                  src={img}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 280px, (max-width: 1279px) 463px, 606px"
                  priority
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
