import React from 'react';

import { Title } from '../Other';

import careerContent from '../../data/career.json';

const TopSection: React.FC = () => {
  return (
    <div className="wrapper pb-0 md:p-0 md:mb-14">
      <div className="mb-9 md:flex md:justify-between">
        <Title
          content={careerContent.title.content}
          accent={careerContent.title.accent}
          className="mb-2 md:mb-0"
        />

        <p className="text w-[180px] ml-auto md:text-[13px] md:w-[221px] md:pt-2 md:mb-0 md:ml-0">
          {careerContent.text}
        </p>
      </div>

      <h3 className="font-extralight text-3xl text-right uppercase pr-5 mb-9 md:text-left md:pl-20 md:m-0">
        {careerContent.subtitle}
      </h3>
    </div>
  );
};

export default TopSection;
