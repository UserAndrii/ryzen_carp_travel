import React from 'react';

import AdvantagesList from './AdvantagesList';

import careerContent from '../../data/career.json';

const Advantages: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none">
      <div className="wrapper">
        <h2 className="title-bold mb-6">
          <span className="title">{careerContent.title.content}</span>{' '}
          {careerContent.title.accent}
        </h2>

        <p className="text w-[180px] ml-auto mb-9">{careerContent.text}</p>

        <h3 className="font-extralight text-3xl text-right uppercase mr-5 mb-9">
          {careerContent.subtitle}
        </h3>

        <AdvantagesList advantages={careerContent.advantages} />
      </div>
    </div>
  );
};

export default Advantages;
