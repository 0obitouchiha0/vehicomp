import React, { FC } from 'react';
import { TextField, MenuItem, TextFieldProps } from '@mui/material';

import { SelectProps } from './types';


export const Select: FC<SelectProps> = ({
  name,
  options,
  variant,
  ...otherProps
}) => {
  const configSelect: TextFieldProps = {
    ...otherProps,
    select: true,
    variant: variant || 'filled',
    fullWidth: true,
  };

  return (
    <TextField name={ name } { ...configSelect }>
      { options.map((item) => (
        <MenuItem key={ item } value={ item }>
          { item }
        </MenuItem>
      )) }
    </TextField>
  );
};
