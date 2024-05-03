'use client';

import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Title } from '../Other';

import { servicesData } from '@/data';

import { ServiceCardProps } from '@/types';

export const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  card: { id, image, call, description },
  activeSlide,
}) => {
  return (
    <div className="wrapper flex flex-col h-full">
      <div className="mb-4 md:flex md:justify-between md:items-center md:mb-9 lg:justify-normal lg:gap-[170px] lg:mb-6">
        <Title
          content={servicesData.title.content}
          accent={servicesData.title.accent}
          className="mb-6 md:mb-0"
        />

        <p className="font-thin text-xxl text-right text-support md:text-xxl_tab lg:text-xxl_desk">
          <span className="text-main">{`0${id}/`}</span>
          {servicesData.amount}
        </p>
      </div>

      <div className="flex-auto flex flex-col gap-3 md:flex-row md:gap-4 lg:gap-5">
        <div className="relative flex w-full h-[213px] md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]">
          <Image
            src={image}
            alt={call}
            fill
            sizes="(max-width: 480px) 280px, (max-width: 1279px) 453px, 607px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between flex-auto md:w-[221px]">
          <div className="mb-5 md:flex md:flex-col-reverse md:mb-0 lg:flex-row-reverse lg:justify-end lg:gap-[60px]">
            <p
              className={cn(
                'label text-right mb-6 md:mb-0 md:text-left lg:transition-transform',
                {
                  'lg:translate-y-[36px]': activeSlide === 1,
                  'lg:translate-y-[78px]': activeSlide === 2,
                  'lg:translate-y-[140px]': activeSlide === 3,
                  'lg:translate-y-[182px]': activeSlide === 4,
                }
              )}
            >
              {call}
            </p>

            {children}
          </div>

          <p className="block text md:text-[13px] md:text-justify lg:text-[18px] lg:pl-[312px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
