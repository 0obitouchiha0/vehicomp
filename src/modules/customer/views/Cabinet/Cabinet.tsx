import React from 'react';
import { Grid, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { AccountLayout } from '@common/components/AccountLayout/AccountLayout';
import { Title } from '@common/components/Title/Title';
import { TextField } from '@common/components/TextField/TextField';
import { Button } from '@common/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { updateUserThunk } from '@common/store/reducers/userReducer';

import * as Styled from './styles';
import { validationSchema } from './consts';
import { CabinetFormType } from './types';


export const Cabinet = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const initialValues = {
    firstname: user?.firstname || '',
    middlename: user?.middlename || '',
    lastname: user?.lastname || '',
    phone: user?.phone || '',
    email: user?.email || '',
  };
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<CabinetFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CabinetFormType) => {
    dispatch(updateUserThunk(data));
  };

  return (
    <AccountLayout>
      <Styled.Container>
        <div>
          <Title>Общая информация</Title>
        </div>
        <Styled.FormWrapper>
          <form>
            <Grid container spacing={ 5 }>
              <Grid item xs={ 4 }>
                <Controller
                  control={ control }
                  name="firstname"
                  render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField name="firstname" variant="standard" label="Имя" value={ value } error={ !!error?.message } onChange={ onChange } />
                  ) }
                />
              </Grid>
              <Grid item xs={ 4 }>
                <Controller
                  control={ control }
                  name="lastname"
                  render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField name="lastname" variant="standard" label="Фамилия" value={ value } error={ !!error?.message } onChange={ onChange } />
                  ) }
                />
              </Grid>
              <Grid item xs={ 4 }>
                <Controller
                  control={ control }
                  name="middlename"
                  render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField name="middlename" variant="standard" label="Отчество" value={ value } error={ !!error?.message } onChange={ onChange } />
                  ) }
                />
              </Grid>
              <Grid item xs={ 4 }>
                <Controller
                  control={ control }
                  name="phone"
                  render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField name="phone" variant="standard" label="Номер телефона" value={ value } error={ !!error?.message } onChange={ onChange } />
                  ) }
                />
              </Grid>
              <Grid item xs={ 4 }>
                <Controller
                  control={ control }
                  name="email"
                  render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField name="email" variant="standard" label="Электронная почта" value={ value } error={ !!error?.message } onChange={ onChange } />
                  ) }
                />
              </Grid>
              <Box sx={{
                width: '100%',
                height: 40,
              }}
              />
              <Grid item xs={ 2 }>
                <Button size="large" type="submit" disabled={ !isValid } onClick={ handleSubmit(onSubmit) }>Сохранить</Button>
              </Grid>
            </Grid>
          </form>
        </Styled.FormWrapper>
      </Styled.Container>
    </AccountLayout>
  );
};
