import * as Yup from 'yup';


export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Пожалуйста, введите валидную почту').required('Почта обязательна!'),
  password: Yup.string().required('Пароль обязателен!'),
});
