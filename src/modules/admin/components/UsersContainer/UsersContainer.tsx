import React, { FC } from 'react';

import { UsersContainerProps } from './types';
import { User } from '../User/User';
import * as Styled from './styles';


export const UsersContainer: FC<UsersContainerProps> = ({ users }) => (
  <Styled.Container>
    { users.map((user) => (
      <User
        key={ user.id }
        { ...user }
      />
    )) }
  </Styled.Container>
);
