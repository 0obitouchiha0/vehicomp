import React, { FC, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { addOrderThunk } from '@common/store/reducers/ordersReducer';
import { useAppDispatch, useAppSelector } from '@common/store/store';

import { MainFormFormType, MainFormProps } from './types';
import { initialValues, machineTypes, validationSchema } from './consts';
import { TextField } from '../TextField/TextField';
import { Select } from '../Select/Select';
import { Button } from '../Button/Button';
import { AdditionalFields } from '../AdditionalFields/AdditionalFields';


export const MainForm: FC<MainFormProps> = ({ variant }) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [machineType, setMachineType] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<MainFormFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (obj: MainFormFormType) => {
    const {
      name, phone, type, email, time, address, payWay, ...description
    } = obj;
    dispatch(addOrderThunk({
      userId: user?.id || null, name, phone, type, email, time, address, pay: payWay, description: JSON.stringify(description),
    }));
  };


  return (
    <form>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 4 }>
          <Controller
            control={ control }
            name="name"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="name" variant={ variant } label="ФИО*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 4 }>
          <Controller
            control={ control }
            name="phone"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="phone" variant={ variant } label="Номер телефона*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 4 }>
          <Controller
            control={ control }
            name="email"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="email" variant={ variant } label="Электронная почта*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 6 }>
          <Controller
            control={ control }
            name="type"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                name="type"
                label="Выберите тип техники*"
                options={ machineTypes }
                value={ value }
                variant={ variant }
                error={ !!error?.message }
                onChange={ (e) => {
                  onChange(e.target.value);
                  setMachineType(e.target.value as string);
                } }
              />
            ) }
          />

        </Grid>
        <Grid item xs={ 6 }>
          <Controller
            control={ control }
            name="address"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="address" variant={ variant } label="Введите адрес*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          { machineType !== null && <AdditionalFields basicFieldsNeeded control={ control } type={ machineType } variant={ variant } /> }
        </Grid>
        <Box sx={{
          width: '100%',
          height: 20,
        }}
        />
        <Grid item xs={ 2 }>
          <Button type="submit" disabled={ !isValid } onClick={ handleSubmit(onSubmit) }>ОТПРАВИТЬ</Button>
        </Grid>
      </Grid>
    </form>
  );
};
