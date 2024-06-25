import React, { useEffect } from 'react';

import { Title } from '@common/components/Title/Title';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { EquipmentContainer } from '@common/components/EquipmentContainer/EquipmentContainer';
import { getAllEquipmentThunk } from '@common/store/reducers/equipmentReducer';

import * as Styled from './styles';


export const AllEquipment = () => {
  const dispatch = useAppDispatch();
  const { allEquipment } = useAppSelector((state) => state.equipment);

  useEffect(() => {
    dispatch(getAllEquipmentThunk());
  }, []);

  return (
    <Styled.Container>
      <div>
        <Title>Вся техника</Title>
      </div>
      <EquipmentContainer equipment={ allEquipment } />
    </Styled.Container>
  );
};
