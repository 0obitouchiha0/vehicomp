import React, { FC } from 'react';

import { EquipmentContainerProps } from './types';
import { Equipment } from '../Equipment/Equipment';
import * as Styled from './styles';


export const EquipmentContainer: FC<EquipmentContainerProps> = ({ equipment }) => (
  <Styled.Container>
    { equipment.map((item) => (
      <Equipment
        key={ item.id }
        id={ item.id }
        type={ item.type }
        name={ item.name }
        phone={ item.phone }
        email={ item.email }
        description={ item.description }
      />
    )) }
  </Styled.Container>
);
