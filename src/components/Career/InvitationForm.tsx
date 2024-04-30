import React from 'react';

import { Appeal } from './Appeal';
import { FormGeneration } from '../Form';

import { formData } from '@/data';

export const InvitationForm: React.FC = () => {
  return (
    <div className="md:absolute md:bottom-16 md:right-8 bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none lg:bottom-[104px]">
      <div className="wrapper md:p-0">
        <Appeal />

        <FormGeneration
          typeForm="invite"
          formOptions={formData.inviteInputs}
          inputWrapperStyle="lg:gap-6 lg:mb-9"
          inputListStyle="mb-4 md:m-0 lg:gap-6"
          textareaStyle="md:w-[222px] md:h-[228px] lg:w-[292px] lg:h-[268px]"
        />
      </div>
    </div>
  );
};
