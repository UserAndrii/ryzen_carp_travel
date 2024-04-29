import React from 'react';

import { Appeal } from './Appeal';
import { FormGeneration } from '../Form';

import formOptions from '../../data/form.json';

const InvitationForm: React.FC = () => {
  return (
    <div className="md:absolute md:bottom-16 md:right-8 bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none">
      <div className="wrapper md:p-0">
        <Appeal />

        <FormGeneration
          typeForm="invite"
          formOptions={formOptions.inviteInputs}
          textareaStyle="md:w-[222px] md:h-[228px]"
        />
      </div>
    </div>
  );
};

export default InvitationForm;
