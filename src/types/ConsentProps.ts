import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormData } from './FormData';

export interface ConsentProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}
