import React from 'react';

import { Title } from '@common/components/Title/Title';
import { EquipmentForm } from '@modules/executor/components/EquipmentForm/EquipmentForm';

import * as Styled from './styles';


export const CreateEquipment = () => (
  <Styled.Container>
    <div>
      <Title>Общая информация</Title>
    </div>
    <Styled.FormWrapper>
      <EquipmentForm />
    </Styled.FormWrapper>
  </Styled.Container>
);
