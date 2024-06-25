import React, { useEffect } from 'react';

import { Title } from '@common/components/Title/Title';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { EquipmentContainer } from '@common/components/EquipmentContainer/EquipmentContainer';
import { getUserEquipmentThunk } from '@common/store/reducers/equipmentReducer';

import * as Styled from './styles';


export const MyEquipment = () => {
  const dispatch = useAppDispatch();
  const { userEquipment } = useAppSelector((state) => state.equipment);

  useEffect(() => {
    dispatch(getUserEquipmentThunk());
  }, []);

  return (
    <Styled.Container>
      <div>
        <Title>Моя техника</Title>
      </div>
      <EquipmentContainer equipment={ userEquipment } />
    </Styled.Container>
  );
};
