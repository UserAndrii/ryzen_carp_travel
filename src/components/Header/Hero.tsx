import React from 'react';

import ActionBtn from './ActionBtn';
import heroContent from '../../data/hero.json';

const Hero: React.FC = () => {
  return (
    <div className="wrapper pt-9">
      <div className="mb-6">
        <p className="subtitle-bold tracking-normal uppercase text-right">
          {heroContent.subtitle.days}
          <span className="subtitle">{heroContent.subtitle.main}</span>
        </p>

        <p className="font-light text-xs tracking-extraWidest mt-[-8px] mr-[-6px] text-right">
          {heroContent.subtitle.sub}
        </p>
      </div>

      <h1 className="title mb-6">
        <span className="block title-bold">{heroContent.title.action}</span>
        {heroContent.title.content}
      </h1>

      <p className="font-extralight text-xxs w-[157px] mb-6">
        {heroContent.locations.join(' / ')}
      </p>

      <p className="font-extralight text-justify text-base mb-6">
        {heroContent.description}
      </p>

      <ActionBtn />
    </div>
  );
};

export default Hero;
