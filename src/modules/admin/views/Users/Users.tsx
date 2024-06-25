import React, { useEffect } from 'react';

import { Title } from '@common/components/Title/Title';
import { useAppDispatch, useAppSelector } from '@common/store/store';
import { UsersContainer } from '@modules/admin/components/UsersContainer/UsersContainer';
import { getUsersThunk } from '@common/store/reducers/userReducer';

import * as Styled from './styles';


export const Users = () => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsersThunk());
  }, []);

  return (
    <Styled.Container>
      <div>
        <Title>Пользователи</Title>
      </div>
      <UsersContainer users={ users } />
    </Styled.Container>
  );
};
