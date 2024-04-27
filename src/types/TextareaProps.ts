import { UseFormRegister } from 'react-hook-form';

import { FormData } from './FormData';

export interface TextareaProps {
  label: string;
  register: UseFormRegister<FormData>;
}
