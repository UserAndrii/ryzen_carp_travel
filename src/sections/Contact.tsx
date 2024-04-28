import React from 'react';

import { ContactInfo } from '@/components/Contact';
import { FormGeneration } from '@/components/Form';

import menuContent from '../data/menu.json';
import formContent from '../data/form.json';

const Contact: React.FC = () => {
  return (
    <footer
      id={menuContent.list[4]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat bg-contactMob md:bg-contactTab lg:bg-contactDesk h-[856px]"
    >
      <div className="wrapper">
        <ContactInfo />

        <FormGeneration
          typeForm="contact"
          formOptions={formContent.contactInputs}
        />
      </div>
    </footer>
  );
};

export default Contact;
