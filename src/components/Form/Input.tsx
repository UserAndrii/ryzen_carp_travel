import React from 'react';
import cn from 'classnames';

import { InputProps } from '@/types';

export const Input: React.FC<InputProps> = ({
  input,
  register,
  errors,
  inputStyle,
}) => {
  const { label, id, name, type, autoComplete, placeholder } = input;

  return (
    <div className="relative flex flex-col gap-1">
      <label
        htmlFor={id}
        className={cn('label', { 'text-error': errors[name]?.message })}
      >
        {label}
      </label>
      <input
        className={cn('input', inputStyle, {
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
        <span className="absolute bottom-0 left-3 font-extralight text-sm md:text-[13px] lg:text-[20px]/[24px] lg:bottom-[1.5px]">
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
