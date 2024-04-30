import React from 'react';

import { Title } from '../Other';

import { careerData } from '@/data';

export const TopSection: React.FC = () => {
  return (
    <div className="wrapper pb-0 mb-9 md:p-0 md:mb-14 lg:mb-12">
      <div className="mb-9 md:flex md:justify-between lg:mb-6">
        <Title
          content={careerData.title.content}
          accent={careerData.title.accent}
          className="mb-2 md:mb-0"
        />

        <p className="text w-[180px] ml-auto md:text-[13px] md:text-justify md:w-[221px] md:pt-2 md:mb-0 md:ml-0 lg:pt-3 lg:text-base_desk lg:w-[293px]">
          {careerData.text}
        </p>
      </div>

      <h3 className="font-extralight text-3xl text-right uppercase pr-5 md:text-left md:pl-20 lg:text-[36px]/[39px] lg:pl-[123px]">
        {careerData.subtitle}
      </h3>
    </div>
  );
};
