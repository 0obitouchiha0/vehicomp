import React, { FC } from 'react';
import { TextField as TextFieldMUI, TextFieldProps } from '@mui/material';


export const TextField: FC<TextFieldProps> = ({
  variant,
  ...otherProps
}) => (
  <TextFieldMUI fullWidth variant={ variant || 'filled' } { ...otherProps } />
);
