import { ReactNode } from 'react';


export interface ButtonProps {
  color?: string;
  variant?: string;
  children: ReactNode;
  size: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  call: string;
}
