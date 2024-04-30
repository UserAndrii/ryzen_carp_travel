import React from 'react';
import cn from 'classnames';

import { formData } from '@/data';

import { ConsentProps } from '@/types';

export const Consent: React.FC<ConsentProps> = ({ register, errors }) => {
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
        className={cn(
          'consent relative font-extralight text-xs/[22px] pl-[30px] cursor-pointer md:text-xs md:w-[222px] lg:w-[290px]',
          {
            'before:border-error': errors.consent?.message,
          }
        )}
      >
        {formData.consent.text}
      </label>

      {errors.consent?.message && (
        <p className="absolute error flex items-center -bottom-6 right-0 label text-error md:w-full md:left-48 md:-bottom-[3px] lg:left-28">
          {errors.consent?.message}
        </p>
      )}
    </div>
  );
};
