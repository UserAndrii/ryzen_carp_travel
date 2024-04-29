import React from 'react';
import cn from 'classnames';

import { TextareaProps } from '@/types';

import formContent from '../../data/form.json';

const Textarea: React.FC<TextareaProps> = ({ id, register, textareaStyle }) => {
  return (
    <div className="flex flex-col gap-1 md:flex-auto">
      <label htmlFor={id} className="label">
        {formContent.textarea.label}
      </label>
      <textarea
        id={id}
        className={cn('input w-full h-[196px] resize-none', textareaStyle)}
        {...register('message')}
      />
    </div>
  );
};

export default Textarea;
