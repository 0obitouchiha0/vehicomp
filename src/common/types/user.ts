export interface User {
  id: number;
  email: string;
  password: string;
  role: string;
  phone?: string;
  firstname?: string;
  middlename?: string;
  lastname?: string;
}

export interface UserResponse {
  id: number;
  email: string;
  role: string;
  phone: string | null;
  firstname: string | null;
  middlename: string | null;
  lastname: string | null;
}

export interface RegInfo {
  email: string;
  password: string;
  role: string;
}

export interface LoginInfo {
  email: string;
  password: string;
}

export interface UpdateInfo {
  firstname: string;
  middlename: string;
  lastname: string;
  phone: string;
  email: string;
}
