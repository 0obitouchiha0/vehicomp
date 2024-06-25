import React from 'react';

import { Title } from '@common/components/Title/Title';
import { MainForm } from '@common/components/MainForm/MainForm';

import * as Styled from './styles';


export const CreateOrder = () => (
  <Styled.Container>
    <div>
      <Title>Общая информация</Title>
    </div>
    <Styled.FormWrapper>
      <MainForm variant="standard" />
    </Styled.FormWrapper>
  </Styled.Container>
);
