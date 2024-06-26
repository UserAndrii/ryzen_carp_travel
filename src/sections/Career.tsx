import React from 'react';

import { Advantages, InvitationForm } from '@/components/Career';

import menuContent from '../data/menu.json';

export const Career: React.FC = () => {
  return (
    <section
      id={menuContent.list[2]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat md:bg-careerTab lg:bg-careerDesk"
    >
      <div className="md:relative md:flex md:max-w-tab md:px-8 md:py-16 md:mx-auto lg:max-w-desk lg:px-6 lg:py-[104px]">
        <Advantages />
        <InvitationForm />
      </div>
    </section>
  );
};
