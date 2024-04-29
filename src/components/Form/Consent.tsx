import React from 'react';

import { ConsentProps } from '@/types';

import formContent from '../../data/form.json';

const Consent: React.FC<ConsentProps> = ({ register, errors }) => {
  return (
    <div className="flex relative mb-6 md:mb-0">
      <input
        type="checkbox"
        id="consent"
        className="checkbox appearance-none"
        {...register('consent')}
      />
      <label
        htmlFor="consent"
        className="consent relative font-extralight text-xs/[22px] pl-[30px] cursor-pointer md:text-xs md:w-[222px]"
      >
        {formContent.consent.text}
      </label>

      {errors.consent?.message && (
        <p className="absolute error flex items-center bottom-0 right-0 label text-error md:w-full md:left-48 md:-bottom-[3px]">
          {errors.consent?.message}
        </p>
      )}
    </div>
  );
};

export default Consent;
