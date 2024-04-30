import React from 'react';

import { BtnSlideProps } from '@/types';

export const BtnSlider: React.FC<BtnSlideProps> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};
