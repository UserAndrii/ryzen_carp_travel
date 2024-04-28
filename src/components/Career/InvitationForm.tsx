import React from 'react';

import { FormGeneration } from '../Form';
import Appeal from './Appeal';

import { careerSchema } from '@/helpers';
import formOptions from '../../data/form.json';

const InvitationForm: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none">
      <div className="wrapper">
        <Appeal />

        <FormGeneration
          typeForm="invite"
          formOptions={formOptions.inviteInputs}
        />
      </div>
    </div>
  );
};

export default InvitationForm;
