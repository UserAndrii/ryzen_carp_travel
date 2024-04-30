'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Slide } from './Slide';
import { BtnSlider } from './BtnSlider';

import { galleryData } from '@/data';

export const SlideList: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        direction={'vertical'}
        slidesPerView={3}
        spaceBetween={24}
        wrapperTag="ul"
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        breakpoints={{
          768: {
            effect: 'creative',
            direction: 'horizontal',
          },
        }}
        className="gallery h-[609px] md:h-[294px] lg:h-[429px]"
      >
        {galleryData.slides.map(({ img, alt }, index) => (
          <SwiperSlide
            tag="li"
            key={index}
            className="slider flex items-center"
          >
            {({ isActive }) => (
              <Slide isActive={isActive} img={img} alt={alt} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden md:absolute md:flex md:justify-between md:w-full md:h-10 md:bottom-4 md:z-10 lg:bottom-0 lg:gap-[651px]">
        <BtnSlider
          className="prev-btn slide-btn ml-9 lg:ml-[230px]"
          label="back"
        />

        <BtnSlider
          className="next-btn slide-btn mr-9 lg:mr-[230px]"
          label="next"
        />
      </div>
    </div>
  );
};
