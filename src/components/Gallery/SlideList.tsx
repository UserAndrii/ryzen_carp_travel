'use client';

import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import Slide from './Slide';
import BtnSlider from './BtnSlider';

import galleryContent from '../../data/gallery.json';

const SlideList: React.FC = () => {
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
        className="gallery h-[609px] md:h-[294px]"
      >
        {galleryContent.slides.map(({ img, alt }, index) => (
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

      <div className="hidden md:absolute md:flex md:justify-between md:w-full md:h-8 md:bottom-4 md:z-10">
        <BtnSlider
          className="prev-btn relative active-btn after:-bottom-1 text-[33px] font-thin uppercase md:h-8 py-2 ml-9 transition"
          label="back"
        />

        <BtnSlider
          className="next-btn relative active-btn after:-bottom-1 text-[33px] font-thin uppercase md:h-8 py-2 mr-9 transition"
          label="next"
        />
      </div>
    </div>
  );
};

export default SlideList;
