import React, { FC } from 'react';
import { Radio as RadioMUI, FormControlLabel, RadioProps } from '@mui/material';


export const Radio: FC<RadioProps & { label: string }> = ({
  name,
  label,
  ...otherProps
}) => (
  <FormControlLabel
    control={ <RadioMUI name={ name } { ...otherProps } color="primary" /> }
    label={ label }
  />
);
