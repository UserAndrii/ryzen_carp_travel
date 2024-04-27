import React from 'react';

import { InputProps } from '@/types';
import cn from 'classnames';

const Input: React.FC<InputProps> = ({ input, register, errors }) => {
  const { label, id, name, type, autoComplete, placeholder } = input;

  return (
    <div className="relative flex flex-col gap-1 mb-4">
      <label
        htmlFor={id}
        className={cn('label', { 'text-error': errors[name]?.message })}
      >
        {label}
      </label>
      <input
        className={cn('input', {
          'input-phone': name === 'phone',
          'text-error': errors[name]?.message,
        })}
        id={id}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register(name)}
      />
      {name === 'phone' && (
        <span className="absolute bottom-[2px] left-3 font-extralight text-sm">
          + 38
        </span>
      )}
      {errors[name] && (
        <p className="absolute error flex items-center -bottom-6 right-0 label text-error">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
