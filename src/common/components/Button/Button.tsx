import React, { FC } from 'react';
import { Button as ButtonMUI, ButtonProps } from '@mui/material';


export const Button: FC<ButtonProps> = ({
  children,
  variant,
  color,
  size,
  onClick,
}) => {
  const configButton = {
    variant: variant || 'contained',
    color: color || 'primary',
    fullWidth: true,
    onClick,
    size,
  };

  return (
    <ButtonMUI
      { ...configButton }
    >
      { children }
    </ButtonMUI>
  );
};
