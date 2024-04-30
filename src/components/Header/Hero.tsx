import React from 'react';

import { ActionBtn } from './ActionBtn';

import { heroData } from '@/data';

export const Hero: React.FC = () => {
  return (
    <div className="relative wrapper pt-9 md:pt-16 lg:pt-[72px]">
      <div className="mb-6 md:absolute top-16 right-5">
        <p className="subtitle-bold tracking-normal uppercase text-right">
          {heroData.subtitle.days}
          <span className="subtitle lg:ml-2">{heroData.subtitle.main}</span>
        </p>

        <p className="font-light text-xxs tracking-extraWidest mt-[-8px] mr-[-6px] text-right md:text-md md:tracking-[1.81em] lg:text-base_tab/[19.36px] lg:tracking-[2.28em] lg:-mr-7">
          {heroData.subtitle.sub}
        </p>
      </div>

      <h1 className="block title mb-6 md:mb-[68px] lg:pr-[586px] lg:mb-[148px]">
        <span className="block title-bold">{heroData.title.action}</span>
        {heroData.title.content}
      </h1>

      <p className="font-extralight text-xxxs w-[157px] mb-6 md:text-md md:tracking-wide md:w-[270px] md:mb-0 lg:w-full lg:text-base_tab/[24px]">
        {heroData.locations.join(' / ')}
      </p>

      <div className="md:absolute md:bottom-16 md:right-8 md:w-[230px] lg:bottom-[104px] lg:right-6 lg:w-[294px]">
        <p className="font-extralight text-justify text-base mb-6 md:text-[16px] md:mb-7 lg:text-menu/[24px]">
          {heroData.description}
        </p>

        <ActionBtn />
      </div>
    </div>
  );
};
