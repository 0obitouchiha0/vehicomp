import React, { FC } from 'react';
import {
  Checkbox,
  FormControl,
  CheckboxProps as CheckboxPropsMUI,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { useField } from 'formik';

import { CheckboxProps } from './types';


const CheckboxWrapper: FC<CheckboxProps> = ({ name, label }) => {
  const [field] = useField(name);

  const configCheckbox: Partial<CheckboxPropsMUI> = {
    ...field,
    color: 'primary',
  };

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={ <Checkbox { ...configCheckbox } /> }
          label={ label }
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
