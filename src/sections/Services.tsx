'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import { ServiceCard, SubTitleList } from '@/components/Services';

import menuContent from '../data/menu.json';
import servicesContent from '../data/services.json';

export const Services: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      onSlideChange={s => {
        setActiveSlide(s.activeIndex);
      }}
      ref={swiperRef}
    >
      {servicesContent.slide.map(card => (
        <SwiperSlide key={card.id}>
          <section
            id={menuContent.list[1]}
            className={`bg-bgSecond bg-cover bg-center bg-no-repeat h-[851px] md:h-full servisesBg${card.id}`}
          >
            <ServiceCard card={card} activeSlide={activeSlide}>
              <SubTitleList
                subtitles={servicesContent.subtitle}
                activeSlide={activeSlide}
                swiperRef={swiperRef}
              />
            </ServiceCard>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
