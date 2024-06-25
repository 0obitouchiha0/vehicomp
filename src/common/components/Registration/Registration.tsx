import React, { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@common/store/store';
import { regThunk } from '@common/store/reducers/userReducer';

import { RegistrationFormFormType, RegistrationProps } from './types';
import { initialValues, validationSchema } from './consts';
import { Radio } from '../Radio/Radio';
import { TextField } from '../TextField/TextField';
import { Button } from '../Button/Button';


export const Registration: FC<RegistrationProps> = ({ setIsVisibleModal }) => {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<RegistrationFormFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const submitHandler = (values: RegistrationFormFormType) => {
    dispatch(regThunk({
      email: values.email,
      password: values.password,
      role: values.role,
    }));
    setIsVisibleModal(false);
  };

  return (
    <form onSubmit={ handleSubmit(submitHandler) }>
      <Grid container spacing={ 4 }>
        <Grid item xs={ 12 }>
          <Controller
            control={ control }
            name="role"
            render={ ({ field: { onChange, value, name } }) => (
              <>
                <Radio name={ name } value="customer" checked={ value === 'customer' } label="Заказчик" onChange={ onChange } />
                <Radio name={ name } value="executor" checked={ value === 'executor' } label="Исполнитель" onChange={ onChange } />
              </>
            ) }
          />

        </Grid>
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
              <TextField name="password" variant="standard" label="Пароль" type="password" error={ !!error?.message } value={ value } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <Controller
            control={ control }
            name="passwordConfirmation"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="passwordConfirmation" variant="standard" label="Подтвердите пароль" type="password" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          <Button type="submit" disabled={ !isValid } onClick={ handleSubmit(submitHandler) }>Зарегистрироваться</Button>
        </Grid>
      </Grid>
    </form>
  );
};
