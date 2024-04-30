'use client';

import React from 'react';
import cn from 'classnames';
import useFormPersist from 'react-hook-form-persist';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { careerSchema, feedbackSchema } from '@/helpers';

import { Input } from './Input';
import { Textarea } from './Textarea';
import { Consent } from './Consent';
import { SubmitBtn } from './SubmitBtn';

import { FormData, FormGenerationProps, InputForm } from '@/types';

export const FormGeneration: React.FC<FormGenerationProps> = ({
  typeForm,
  formOptions,
  textareaStyle,
  inputListStyle,
  inputWrapperStyle,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(
      typeForm === 'invite' ? careerSchema : feedbackSchema
    ),
  });

  useFormPersist(typeForm, {
    watch,
    setValue,
    exclude: ['consent'],
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn('mb-4 md:flex md:gap-5', inputWrapperStyle)}>
        <ul className={cn('flex flex-col gap-4', inputListStyle)}>
          {formOptions.map(input => (
            <li key={input.id}>
              <Input
                input={input as InputForm}
                register={register}
                errors={errors}
              />
            </li>
          ))}
        </ul>

        <Textarea
          id={typeForm}
          register={register}
          textareaStyle={textareaStyle}
        />
      </div>

      <div className="md:flex md:jastify-beetwen md:items-start">
        {typeForm === 'invite' && (
          <Consent register={register} errors={errors} />
        )}

        <SubmitBtn />
      </div>
    </form>
  );
};
