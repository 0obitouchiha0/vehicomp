import { TextFieldVariants } from '@mui/material';
import { Control } from 'react-hook-form';


export interface AdditionalFieldsProps {
  type: string;
  variant: TextFieldVariants;
  control: Control<any, any>;
  basicFieldsNeeded: boolean;
}

export interface BasicFieldsProps {
  variant: TextFieldVariants;
  control: Control<any, any>;
}
