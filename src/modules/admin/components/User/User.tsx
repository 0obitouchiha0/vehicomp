import { FC } from 'react';

import { UserResponse } from '@common/types/user';

import * as Styled from './styles';
import { roles } from './consts';


export const User: FC<UserResponse> = ({
  firstname, lastname, middlename, phone, email, role,
}) => (
  <Styled.Order>
    <Styled.Header>
      <Styled.Name>{ (lastname || firstname || middlename) ? `${lastname || ''} ${firstname || ''} ${middlename || ''}` : 'Имя не указано' }</Styled.Name>
    </Styled.Header>
    <div>
      <b>Контактная информация:</b>
      <Styled.ContactInfo>Почта: { email }</Styled.ContactInfo>
      <Styled.ContactInfo>Номер телефона: { phone }</Styled.ContactInfo>
    </div>
    <div><b>Роль:</b> { roles[role as keyof typeof roles] }</div>
  </Styled.Order>
);
