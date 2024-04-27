'use client';

import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';

import { Consent, Input, SubmitBtn, Textarea } from '../Form';
import Appeal from './Appeal';

import { careerSchema } from '@/helpers';
import { FormData, InputForm } from '@/types';

import formOptions from '../../data/form.json';

const InvitationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(careerSchema) });

  useFormPersist('Invitation-Form', {
    watch,
    setValue,
    exclude: ['consent'],
  });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-careerMob md:bg-none">
      <div className="wrapper">
        <Appeal />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            {formOptions.inputs.map(input => (
              <li key={input.id}>
                <Input
                  input={input as InputForm}
                  register={register}
                  errors={errors}
                />
              </li>
            ))}
          </ul>

          <Textarea label={formOptions.textarea.label} register={register} />

          <Consent
            text={formOptions.consent.text}
            register={register}
            errors={errors}
          />

          <SubmitBtn />
        </form>
      </div>
    </div>
  );
};

export default InvitationForm;
