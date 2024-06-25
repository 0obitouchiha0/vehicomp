import React, { FC } from 'react';

import { OrdersContainerProps } from './types';
import { Order } from '../Order/Order';
import * as Styled from './styles';


export const OrdersContainer: FC<OrdersContainerProps> = ({ orders }) => (
  <Styled.Container>
    { orders.map((order) => (
      <Order
        key={ order.id }
        id={ order.id }
        name={ order.name }
        phone={ order.phone }
        email={ order.email }
        address={ order.address }
        description={ order.description }
        pay={ order.pay }
        time={ order.time }
      />
    )) }
  </Styled.Container>
);
