import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { InputForm } from './InputForm';
import { FormData } from './FormData';

export interface InputProps {
  input: InputForm;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}
