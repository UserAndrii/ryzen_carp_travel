import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormData } from './FormData';
import { FormDataOptions } from './FormDataOptions';

export interface ConsentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  text: string;
}
