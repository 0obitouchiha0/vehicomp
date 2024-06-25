import React, { useEffect } from 'react';

import { AccountLayout } from '@common/components/AccountLayout/AccountLayout';
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
    <AccountLayout>
      <Styled.Container>
        <div>
          <Title>Вся техника</Title>
        </div>
        <EquipmentContainer equipment={ allEquipment } />
      </Styled.Container>
    </AccountLayout>
  );
};
