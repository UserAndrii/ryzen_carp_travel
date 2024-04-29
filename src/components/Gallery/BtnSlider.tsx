import React from 'react';

export interface BtnSlideProps {
  label: string;
  className: string;
}

const BtnSlider: React.FC<BtnSlideProps> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default BtnSlider;
