type Inputs = {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  placeholder: string;
  label: string;
};

export type FormGenerationProps = {
  typeForm: string;
  formOptions: Inputs[];
};