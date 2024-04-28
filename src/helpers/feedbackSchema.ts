import * as yup from 'yup';

import { nameRegExp } from './nameRegExp';
import { emailRegExp } from './emailRegExp';

export const feedbackSchema = yup
  .object({
    name: yup
      .string()
      .matches(nameRegExp, 'Incorrect name')
      .required('Incorrect name'),
    email: yup
      .string()
      .matches(emailRegExp, 'Invalid email')
      .required('Invalid email'),
    message: yup.string(),
  })
  .required();
