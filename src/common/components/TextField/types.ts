import { TextFieldVariants } from '@mui/material';


export interface TextFieldProps {
  name: string;
  variant: TextFieldVariants;
  label: string;
  type?: string;
  inputProps?: Record<string, string>;
}
