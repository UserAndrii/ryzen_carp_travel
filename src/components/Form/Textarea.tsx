import React from 'react';

import { TextareaProps } from '@/types';

const Textarea: React.FC<TextareaProps> = ({ label, register }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor="message" className="label">
        {label}
      </label>
      <textarea
        id="message"
        className="input w-full h-[196px] resize-none"
        {...register('message')}
      />
    </div>
  );
};

export default Textarea;
