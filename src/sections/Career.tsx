import React from 'react';

import { Advantages, InvitationForm } from '@/components/Career';

import menuContent from '../data/menu.json';

const Career: React.FC = () => {
  return (
    <section
      id={menuContent.list[2]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat md:bg-careerTab lg:bg-careerDesk"
    >
      <Advantages />
      <InvitationForm />
    </section>
  );
};

export default Career;
