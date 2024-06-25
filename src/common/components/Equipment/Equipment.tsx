import { FC } from 'react';

import { Equipment as EquipmentType } from '@common/types/equipment';
import { Description } from '@common/components/Description/Description';
import { ReactComponent as DeleteIcon } from '@icons/delete.svg';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { deleteEquipmentThunk } from '@common/store/reducers/equipmentReducer';

import * as Styled from './styles';


export const Equipment: FC<EquipmentType> = ({
  id, name, phone, email, description, type,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const deleteEquipment = () => {
    dispatch(deleteEquipmentThunk({ id }));
  };
  return (
    <Styled.Order>
      <Styled.Header>
        <Styled.OrderName>{ name }</Styled.OrderName>
        { user?.role !== 'customer' && <DeleteIcon onClick={ deleteEquipment } /> }
      </Styled.Header>
      <div>
        <b>Контактная информация:</b>
        <Styled.OrderContact>Почта: { email }</Styled.OrderContact>
        <Styled.OrderContact>Номер телефона: { phone }</Styled.OrderContact>
      </div>
      <div>
        <b>Тип техники: </b><span>{ type }</span><br />
        <b>Описание:</b><br />
        <Description description={ description } />
      </div>
    </Styled.Order>
  );
};
