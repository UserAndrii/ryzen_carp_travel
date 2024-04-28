'use client';

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import Input from './Input';
import Textarea from './Textarea';
import Consent from './Consent';
import SubmitBtn from './SubmitBtn';

import { careerSchema, feedbackSchema } from '@/helpers';
import { FormData, FormGenerationProps, InputForm } from '@/types';

const FormGeneration: React.FC<FormGenerationProps> = ({
  typeForm,
  formOptions,
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
      <ul>
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

      <Textarea id={typeForm} register={register} />

      {typeForm === 'invite' && <Consent register={register} errors={errors} />}

      <SubmitBtn />
    </form>
  );
};

export default FormGeneration;
