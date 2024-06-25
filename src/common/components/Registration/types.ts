export interface RegistrationProps {
  setIsVisibleModal: (flag: boolean) => void;
}

export interface RegistrationFormFormType {
  role: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
