import React, { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Controller } from 'react-hook-form';

import { AdditionalFieldsProps, BasicFieldsProps } from './types';
import { TextField } from '../TextField/TextField';
import { Select } from '../Select/Select';
import Checkbox from '../Checkbox/Checkbox';
import { arrowLength, craneTypes, groundTypes, payWays, tonnages } from './consts';


const BasicFields: FC<BasicFieldsProps> = ({ variant, control }) => (
  <>
    <Grid item xs={ 6 }>
      <Controller
        control={ control }
        name="desc"
        render={ ({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField name="desc" label="Краткое описание задачи" value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
        ) }
      />
    </Grid>
    <Grid item xs={ 6 }>
      <Controller
        control={ control }
        name="time"
        render={ ({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField name="time" label="Примерное время в часах" value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
        ) }
      />
    </Grid>
    <Grid item xs={ 6 }>
      <Controller
        control={ control }
        name="payWay"
        render={ ({ field: { onChange, value }, fieldState: { error } }) => (
          <Select name="payWay" options={ payWays } label="Способ оплаты" value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
        ) }
      />
    </Grid>
  </>
);


export const AdditionalFields: FC<AdditionalFieldsProps> = ({ type, variant, control, basicFieldsNeeded }) => {
  let addArr: ReactNode[] = [];
  switch (type) {
    case 'Автокран': {
      addArr = [
        <Controller
          control={ control }
          name="craneType"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="craneType" label="Тип крана" options={ craneTypes } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="arrowLength"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 2 } name="arrowLength" label="Длина стрелы" options={ arrowLength } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="tonnage"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 3 } name="tonnage" label="Тоннаж крана" options={ tonnages } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="groundType"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 4 } name="groundType" label="Тип подъездного грунта" options={ groundTypes } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="distance"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 5 } name="distance" label="Растояние от крана до точки выгрузки/загрузки" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Манипулятор': {
      addArr = [
        <Controller
          control={ control }
          name="bodyVolume"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 1 } name="bodyVolume" label="Объем кузова, м3" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="arrowLength"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 2 } name="arrowLength" label="Длина стрелы" options={ arrowLength } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="tonnage"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 3 } name="tonnage" label="Тоннаж крана" options={ tonnages } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Экс ЭП / ПП Гусянка / Колёсник': {
      addArr = [
        <Controller
          control={ control }
          name="bodyVolume"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 1 } name="bodyVolume" label="Объем кузова, м3" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Самосвал': {
      addArr = [
        <Controller
          control={ control }
          name="dumpTruckType"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="dumpTruckType" label="Тип самосвала" options={ craneTypes } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="bodyVolume"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 2 } name="bodyVolume" label="Объем кузова, м3" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="shoulderLength"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 3 } name="shoulderLength" label="Длина плеча" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Тонар': {
      addArr = [
        <Controller
          control={ control }
          name="bodyVolume"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 1 } name="bodyVolume" label="Объем кузова, м3" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="tonnage"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 2 } name="tonnage" label="Тоннаж крана" options={ tonnages } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="shoulderLength"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 3 } name="shoulderLength" label="Длина плеча" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Бетононасос': {
      addArr = [
        <Controller
          control={ control }
          name="arrowLength"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="arrowLength" label="Длина стрелы" options={ arrowLength } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="pumpVolume"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <TextField key={ 2 } name="pumpVolume" label="Объем насоса, м3" inputProps={{ type: 'number' }} value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Экскаватор погрузчик': {
      addArr = [
        <Controller
          control={ control }
          name="addStuff"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="addStuff" label="Навесное оборудование" options={ ['30см', '40см', '60см', 'Гидромолот', 'Ковш', 'Виброплита'] } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Бульдозер': {
      addArr = [
        <Controller
          control={ control }
          name="tonnage"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="tonnage" label="Тоннаж" options={ ['16т', '20т', '25т', '30т', '40т', '50т', '60т'] } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
        <Controller
          control={ control }
          name="ripper"
          render={ ({ field: { onChange, value } }) => (
            <Checkbox key={ 2 } name="ripper" label="Pыхлитель" checked={ !!value } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    case 'Грейдер': {
      addArr = [
        <Controller
          control={ control }
          name="tonnage"
          render={ ({ field: { onChange, value }, fieldState: { error } }) => (
            <Select key={ 1 } name="tonnage" label="Тоннаж" options={ ['14т', '18т', '25т'] } value={ value } error={ !!error?.message } variant={ 'filled' && variant } onChange={ onChange } />
          ) }
        />,
      ];
      break;
    }
    default: addArr = [];
  }

  return (
    <Grid container spacing={ 3 }>
      { basicFieldsNeeded && <BasicFields variant={ variant } control={ control } /> }
      { addArr.map((item, i) => (
        <Grid key={ i } item xs={ 6 }>{ item }</Grid>
      )) }
    </Grid>
  );
};
