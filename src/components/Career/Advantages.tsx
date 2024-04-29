import React from 'react';

import TopSection from './TopSection';
import AdvantagesList from './AdvantagesList';

import careerContent from '../../data/career.json';

const Advantages: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none md:flex-auto">
      <TopSection />
      <AdvantagesList advantages={careerContent.advantages} />
    </div>
  );
};

export default Advantages;
