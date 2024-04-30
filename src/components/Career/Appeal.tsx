import React from 'react';

import { careerData } from '@/data';

export const Appeal: React.FC = () => {
  return (
    <div className="w-[180px] ml-auto mb-6 md:w-[221px] md:ml-0 md:mb-8 lg:w-[234px] lg:mb-[14px]">
      <p className="text md:text-[13px] lg:text-base_desk">
        {careerData.appeal1}
      </p>
      <p className="text md:text-[13px] lg:text-base_desk">
        {careerData.appeal2}
      </p>
    </div>
  );
};
