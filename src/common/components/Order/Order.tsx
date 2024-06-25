import { FC } from 'react';

import { Order as OrderType } from '@common/types/order';
import { Description } from '@common/components/Description/Description';
import { ReactComponent as DeleteIcon } from '@icons/delete.svg';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { deleteOrderThunk } from '@common/store/reducers/ordersReducer';

import * as Styled from './styles';


export const Order: FC<OrderType> = ({
  id, name, phone, email, description, time, pay, address,
}) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);
  const deleteOrder = () => {
    dispatch(deleteOrderThunk({ id }));
  };
  return (
    <Styled.Order>
      <Styled.Header>
        <Styled.OrderName>{ name }</Styled.OrderName>
        { user?.role !== 'executor' && <DeleteIcon onClick={ deleteOrder } /> }
      </Styled.Header>
      <div>
        <b>Контактная информация:</b>
        <Styled.OrderContact>Почта: { email }</Styled.OrderContact>
        <Styled.OrderContact>Номер телефона: { phone }</Styled.OrderContact>
      </div>
      <div>
        <b>Описание:</b><br />
        <Description description={ description } />
      </div>
      <div><b>Адрес:</b> { address }</div>
      <div><b>Способ оплаты:</b> { pay }</div>
      <div><b>Примерное время работы, ч:</b> { time }</div>
    </Styled.Order>
  );
};
