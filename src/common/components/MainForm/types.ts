import { TextFieldVariants } from '@mui/material';


export interface MainFormProps {
  variant: TextFieldVariants;
}

export interface MainFormFormType {
  desc: string;
  address: string;
  name: string;
  phone: string;
  email: string;
  type: string;
  time: number;
  payWay: string;
  craneType?: string;
  arrowLength?: string;
  tonnage?: string;
  groundType?: string;
  distance?: number;
  dumpTruckType?: string;
  bodyVolume?: number;
  addStuff?: string;
  ripper?: boolean;
  shoulderLength?: number;
  pumpVolume?: number;
}
