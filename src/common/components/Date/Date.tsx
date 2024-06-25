import React, { FC } from 'react';
import { TextField, TextFieldVariants } from '@mui/material';
import { useField } from 'formik';

import { DateProps } from './types';


export const DatePicker: FC<DateProps> = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined' as TextFieldVariants,
    fullWidth: true,
    InputLabelProps: {
      shrink: true,
    },
    error: false,
    helperText: '',
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField
      { ...configDateTimePicker }
    />
  );
};
