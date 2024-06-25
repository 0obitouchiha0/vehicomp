import React, { FC } from 'react';

import * as Styled from './styles';
import { TitleProps } from './types';


export const Title: FC<TitleProps> = ({ children }) => (
  <Styled.Title>
    { children }
  </Styled.Title>
);
