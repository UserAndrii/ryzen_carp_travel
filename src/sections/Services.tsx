'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import { getServiceImage } from '@/helpers';
import { ServiceCard, SubTitleList } from '@/components/Services';

import menuContent from '../data/menu.json';
import servicesContent from '../data/services.json';

export const Services: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('');

  const [currentWidth, setCurrentWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setBackgroundImage(getServiceImage(currentWidth, activeSlide + 1));
  }, [currentWidth, activeSlide]);

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
            className="bg-bgSecond bg-cover bg-center bg-no-repeat h-[851px] md:h-full"
            style={{ backgroundImage }}
          >
            <ServiceCard
              card={card}
              activeSlide={currentWidth >= 1280 ? activeSlide : 0}
            >
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
