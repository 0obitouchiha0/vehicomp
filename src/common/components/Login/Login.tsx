import React, { FC } from 'react';
import { Grid } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginThunk } from '@common/store/reducers/userReducer';
import { useAppDispatch } from '@common/store/store';

import { initialValues, validationSchema } from './consts';
import { LoginFormFormType, LoginProps } from './types';
import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';


export const Login: FC<LoginProps> = ({ setIsVisibleModal }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<LoginFormFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const submitHandler = (values: LoginFormFormType) => {
    dispatch(loginThunk({
      email: values.email,
      password: values.password,
    }));
    setIsVisibleModal(false);
  };

  return (
    <form onSubmit={ handleSubmit(submitHandler) }>
      <Grid container spacing={ 4 }>
        <Grid item xs={ 12 }>
          <Controller
            control={ control }
            name="email"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="email" variant="standard" label="Электронная почта" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <Controller
            control={ control }
            name="password"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="password" type="password" variant="standard" label="Пароль" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <Button type="submit" disabled={ !isValid } onClick={ handleSubmit(submitHandler) }>Войти</Button>
        </Grid>
      </Grid>
    </form>
  );
};
