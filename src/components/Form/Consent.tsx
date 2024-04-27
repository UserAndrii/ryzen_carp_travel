import React from 'react';

import { ConsentProps } from '@/types';

const Consent: React.FC<ConsentProps> = ({ register, errors, text }) => {
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
        {text}
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
