import React, { useEffect } from 'react';

import { Title } from '@common/components/Title/Title';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { getAllOrdersThunk } from '@common/store/reducers/ordersReducer';
import { OrdersContainer } from '@common/components/OrdersContainer/OrdersContainer';

import * as Styled from './styles';


export const AllOrders = () => {
  const dispatch = useAppDispatch();
  const { allOrders } = useAppSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getAllOrdersThunk());
  }, []);

  return (
    <Styled.Container>
      <div>
        <Title>Все заказы</Title>
      </div>
      <OrdersContainer orders={ allOrders } />
    </Styled.Container>
  );
};
