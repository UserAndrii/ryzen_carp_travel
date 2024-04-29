import React from 'react';

import careerContent from '../../data/career.json';

export const Appeal: React.FC = () => {
  return (
    <div className="w-[180px] ml-auto mb-6 md:w-[221px] md:ml-0 md:mb-8">
      <p className="text text-[13px]">{careerContent.appeal1}</p>
      <p className="text text-[13px]">{careerContent.appeal2}</p>
    </div>
  );
};
