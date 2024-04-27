import React from 'react';

import careerContent from '../../data/career.json';

const Appeal: React.FC = () => {
  return (
    <div className="w-[180px] ml-auto mb-6">
      <p className="text">{careerContent.appeal1}</p>
      <p className="text">{careerContent.appeal2}</p>
    </div>
  );
};

export default Appeal;
