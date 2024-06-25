import { TextFieldVariants } from '@mui/material';
import { ChangeEvent } from 'react';


export interface SelectProps {
  name: string;
  variant: TextFieldVariants;
  options: string[];
  label: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: boolean;
}
