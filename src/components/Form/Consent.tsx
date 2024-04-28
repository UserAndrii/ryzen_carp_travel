import React from 'react';

import { ConsentProps } from '@/types';

import formContent from '../../data/form.json';

const Consent: React.FC<ConsentProps> = ({ register, errors }) => {
  return (
    <div className="flex relative">
      <input
        type="checkbox"
        id="consent"
        className="checkbox appearance-none"
        {...register('consent')}
      />
      <label
        htmlFor="consent"
        className="consent relative font-extralight text-xs/[22px] pl-[30px] mb-6 cursor-pointer"
      >
        {formContent.consent.text}
      </label>

      {errors.consent?.message && (
        <p className="absolute error flex items-center bottom-0 right-0 label text-error">
          {errors.consent?.message}
        </p>
      )}
    </div>
  );
};

export default Consent;
