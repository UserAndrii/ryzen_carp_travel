import React from 'react';

import { ContactInfo } from '@/components/Contact';
import { FormGeneration } from '@/components/Form';

import menuContent from '../data/menu.json';
import formContent from '../data/form.json';
import { Title } from '@/components/Other';

import contactContent from '../data/contact.json';

export const Contact: React.FC = () => {
  return (
    <footer
      id={menuContent.list[4]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat bg-contactMob md:bg-contactTab lg:bg-contactDesk"
    >
      <div className="wrapper">
        <Title
          content={contactContent.title.content}
          accent={contactContent.title.accent}
          className="mb-9 lg:mb-[71px]"
        />

        <div className="lg:flex justify-between">
          <ContactInfo />

          <FormGeneration
            typeForm="contact"
            formOptions={formContent.contactInputs}
            inputListStyle="lg:flex-row lg:gap-5"
            inputWrapperStyle="md:gap-7 lg:flex lg:flex-col lg:mb-6"
            textareaStyle="md:w-full md:h-[221px] lg:h-[174px]"
          />
        </div>
      </div>
    </footer>
  );
};
