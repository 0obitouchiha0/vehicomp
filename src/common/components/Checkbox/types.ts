import { TextFieldVariants } from '@mui/material';


export interface CheckboxProps {
  label: string;
  name: string;
  variant: TextFieldVariants;
  checked: boolean;
  onChange: (checked: boolean) => void;
}
