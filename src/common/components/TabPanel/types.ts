import { ReactNode } from 'react';


export type TabPanelProps = Record<string, unknown> & {
  children: ReactNode;
  value: number;
  index: number;
};
