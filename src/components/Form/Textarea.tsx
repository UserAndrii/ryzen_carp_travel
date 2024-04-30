import React from 'react';
import cn from 'classnames';

import { formData } from '@/data';

import { TextareaProps } from '@/types';

export const Textarea: React.FC<TextareaProps> = ({
  id,
  register,
  textareaStyle,
}) => {
  return (
    <div className="flex flex-col gap-1 md:flex-auto">
      <label htmlFor={id} className="label">
        {formData.textarea.label}
      </label>
      <textarea
        id={id}
        className={cn('input w-full h-[196px] py-2 resize-none', textareaStyle)}
        {...register('message')}
      />
    </div>
  );
};
