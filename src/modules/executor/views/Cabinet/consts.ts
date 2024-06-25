import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
  firstname: Yup.string().required('Имя обязательно!'),
  middlename: Yup.string().required('Фамилия обязательна!'),
  lastname: Yup.string().required('Отчество обязательно!'),
  phone: Yup.string().required('Номер обязателен!'),
  email: Yup.string().required('Почта обязательна!'),
});
