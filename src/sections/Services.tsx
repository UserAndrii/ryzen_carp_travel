'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

import { getServiceImage } from '@/helpers';
import { ServiceCard, SubTitleList } from '@/components/Services';

import servicesContent from '../data/services.json';

const Services: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const [currentWidht, setCurrentWidht] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidht(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
            className="bg-bgSecond bg-cover bg-center bg-no-repeat h-[851px]"
            style={{
              backgroundImage: getServiceImage(currentWidht, card.id),
            }}
          >
            <ServiceCard card={card}>
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

export default Services;
