import * as Yup from 'yup';

import { MainFormFormType } from './types';


export const machineTypes = [
  'Автокран',
  'Манипулятор',
  'Экс ЭП / ПП Гусянка / Колёсник',
  'Самосвал',
  'Тонар',
  'Бетононасос',
  'Экскаватор погрузчик',
  'Бульдозер',
  'Грейдер',
];

export const initialValues: MainFormFormType = {
  type: '',
  craneType: '',
  arrowLength: '',
  tonnage: '',
  groundType: '',
  distance: 0,
  dumpTruckType: '',
  bodyVolume: 0,
  addStuff: '',
  ripper: false,
  shoulderLength: 0,
  pumpVolume: 0,
  time: 0,
  payWay: '',
  desc: '',
  address: '',
  name: '',
  phone: '',
  email: '',
};

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Тип обязателен!'),
  address: Yup.string().required('Адрес обязателен!'),
  name: Yup.string().required('Имя обязательно!'),
  phone: Yup.string().required('Номер обязателен!'),
  email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!'),
  time: Yup.number().integer().required(),
  payWay: Yup.string().required(),
  desc: Yup.string().required(),
  craneType: Yup.string(),
  arrowLength: Yup.string(),
  tonnage: Yup.string(),
  groundType: Yup.string(),
  distance: Yup.number().integer(),
  dumpTruckType: Yup.string(),
  bodyVolume: Yup.number().integer(),
  addStuff: Yup.string(),
  ripper: Yup.boolean(),
  shoulderLength: Yup.number().integer(),
  pumpVolume: Yup.number().integer(),
});
