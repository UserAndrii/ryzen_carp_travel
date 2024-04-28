import React from 'react';

import { TextareaProps } from '@/types';

import formContent from '../../data/form.json';

const Textarea: React.FC<TextareaProps> = ({ id, register }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor={id} className="label">
        {formContent.textarea.label}
      </label>
      <textarea
        id={id}
        className="input w-full h-[196px] resize-none"
        {...register('message')}
      />
    </div>
  );
};

export default Textarea;
