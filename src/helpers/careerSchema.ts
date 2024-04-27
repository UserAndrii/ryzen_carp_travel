import * as yup from 'yup';

import { nameRegExp } from './nameRegExp';
import { phoneRegExp } from './phoneRegExp';
import { emailRegExp } from './emailRegExp';

export const careerSchema = yup
  .object({
    name: yup
      .string()
      .matches(nameRegExp, 'Incorrect name')
      .required('Incorrect name'),
    email: yup
      .string()
      .matches(emailRegExp, 'Invalid email')
      .required('Invalid email'),
    position: yup.string().max(60, 'Too long a position'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Incorrect phone')
      .required('Incorrect phone'),
    message: yup.string(),
    consent: yup
      .boolean()
      .oneOf([true], 'Consent is required')
      .required('Consent is required'),
  })
  .required();
