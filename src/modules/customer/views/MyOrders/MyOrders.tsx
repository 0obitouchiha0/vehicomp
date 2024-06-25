import React, { useEffect } from 'react';

import { Title } from '@common/components/Title/Title';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { getUserOrdersThunk } from '@common/store/reducers/ordersReducer';
import { OrdersContainer } from '@common/components/OrdersContainer/OrdersContainer';

import * as Styled from './styles';


export const MyOrders = () => {
  const dispatch = useAppDispatch();
  const userOrders = useAppSelector((state) => state.orders.userOrders);

  useEffect(() => {
    dispatch(getUserOrdersThunk());
  }, []);

  return (
    <Styled.Container>
      <div>
        <Title>Мои заявки</Title>
      </div>
      <OrdersContainer orders={ userOrders } />
    </Styled.Container>
  );
};
