import React from 'react';

import ActionBtn from './ActionBtn';
import heroContent from '../../data/hero.json';

const Hero: React.FC = () => {
  return (
    <div className="relative wrapper pt-9 md:pt-16">
      <div className="mb-6 md:absolute top-16 right-5">
        <p className="subtitle-bold tracking-normal uppercase text-right">
          {heroContent.subtitle.days}
          <span className="subtitle">{heroContent.subtitle.main}</span>
        </p>

        <p className="font-light text-xxs tracking-extraWidest mt-[-8px] mr-[-6px] text-right md:text-md md:tracking-[1.81em]">
          {heroContent.subtitle.sub}
        </p>
      </div>

      <h1 className="block title mb-6 md:mb-[68px]">
        <span className="block title-bold">{heroContent.title.action}</span>
        {heroContent.title.content}
      </h1>

      <p className="font-extralight text-xxxs w-[157px] mb-6 md:text-md md:tracking-wide md:w-[270px] md:mb-0">
        {heroContent.locations.join(' / ')}
      </p>

      <div className="md:absolute bottom-16 right-8">
        <p className="font-extralight text-justify text-base mb-6 md:text-[16px] md:w-[230px] md:mb-7">
          {heroContent.description}
        </p>

        <ActionBtn />
      </div>
    </div>
  );
};

export default Hero;
