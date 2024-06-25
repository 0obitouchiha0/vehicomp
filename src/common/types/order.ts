export interface Order {
  id: number;
  name: string;
  pay: string;
  description: string;
  phone: string;
  email: string;
  time: string;
  address: string;
}

export interface OrderFormType {
  userId: number | null;
  type: string;
  name: string;
  pay: string;
  description: string;
  phone: string;
  email: string;
  time: number;
  address: string;
}
