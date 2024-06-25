import React, { FC, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch } from '@common/store/store';
import { TextField } from '@common/components/TextField/TextField';
import { Select } from '@common/components/Select/Select';
import { Button } from '@common/components/Button/Button';
import { AdditionalFields } from '@common/components/AdditionalFields/AdditionalFields';
import { addEquipmentThunk } from '@common/store/reducers/equipmentReducer';

import { EquipmentFormFormType } from './types';
import { initialValues, machineTypes, validationSchema } from './consts';


export const EquipmentForm: FC = () => {
  const dispatch = useAppDispatch();
  const [machineType, setMachineType] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EquipmentFormFormType>({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });

  const onSubmit = (obj: EquipmentFormFormType) => {
    const {
      name, phone, type, email, ...description
    } = obj;
    dispatch(addEquipmentThunk({
      name, phone, type, email, description: JSON.stringify(description),
    }));
  };


  return (
    <form>
      <Grid container spacing={ 3 }>
        <Grid item xs={ 6 }>
          <Controller
            control={ control }
            name="name"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="name" variant="standard" label="ФИО*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 6 }>
          <Controller
            control={ control }
            name="phone"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="phone" variant="standard" label="Номер телефона*" value={ value } error={ !!error?.message } onChange={ onChange } />
            ) }
          />
        </Grid>
        <Grid item xs={ 6 }>
          <Controller
            control={ control }
            name="email"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField name="email" variant="standard" label="Электронная почта*" value={ value } error={ !!error?.message } onChange={ onChange } />
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
                variant="standard"
                error={ !!error?.message }
                onChange={ (e) => {
                  onChange(e.target.value);
                  setMachineType(e.target.value as string);
                } }
              />
            ) }
          />
        </Grid>
        <Grid item xs={ 12 }>
          { machineType !== null && <AdditionalFields control={ control } type={ machineType } variant="standard" basicFieldsNeeded={ false } /> }
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
