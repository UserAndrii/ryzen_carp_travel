import React from 'react';

import { Advantages, InvitationForm } from '@/components/Career';

const Career: React.FC = () => {
  return (
    <section className="bg-bgSecond bg-cover bg-center bg-no-repeat md:bg-careerTab lg:bg-careerDesk">
      <Advantages />
      <InvitationForm />
    </section>
  );
};

export default Career;
