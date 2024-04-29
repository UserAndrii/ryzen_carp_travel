import { UseFormRegister } from 'react-hook-form';

import { FormData } from './FormData';

export interface TextareaProps {
  id: string;
  register: UseFormRegister<FormData>;
  textareaStyle?: string;
}
