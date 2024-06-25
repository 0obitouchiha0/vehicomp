import React from 'react';


export interface RadioProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  legend?: string;
}
