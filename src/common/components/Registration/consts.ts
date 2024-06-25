import * as Yup from 'yup';


export const initialValues = {
  role: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

export const validationSchema = Yup.object().shape({
  role: Yup.string().required('Роль обязательна!'),
  email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!'),
  password: Yup.string().required('Пароль обязателен!').min(8, 'Пароль должен быть не короче 8 символов!'),
  passwordConfirmation: Yup.string().required('Подтверждение пароля обязательно!').oneOf([Yup.ref('password')], 'Пароли должны совпадать!'),
});
