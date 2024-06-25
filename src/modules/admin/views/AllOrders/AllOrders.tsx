import React, { useEffect } from 'react';

import { AccountLayout } from '@common/components/AccountLayout/AccountLayout';
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
    <AccountLayout>
      <Styled.Container>
        <div>
          <Title>Все заказы</Title>
        </div>
        <OrdersContainer orders={ allOrders } />
      </Styled.Container>
    </AccountLayout>
  );
};
