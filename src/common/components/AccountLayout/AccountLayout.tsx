import React, { useState, useEffect, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@common/store/store';
import { authThunk, logout } from '@common/store/reducers/userReducer';
import Logo from '@img/main-logo.png';
import { ReactComponent as Logout } from '@icons/logout.svg';

import * as Styled from './styles';
import { AccountLayoutProps } from './types';
import { adminNav, customerNav, executorNav } from './consts';


export const AccountLayout: FC<AccountLayoutProps> = ({ children }) => {
  const { user } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [navByRole, setNavByRole] = useState<Record<string, string>>({});

  const [activeNav, setActiveNav] = useState(window.location.pathname.split('/')[2]);

  useEffect(() => {
    console.log(1);
    dispatch(authThunk());
    if (!user.auth) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (user.user?.role === 'executor') setNavByRole(executorNav);
    else if (user.user?.role === 'customer') setNavByRole(customerNav);
    else if (user.user?.role === 'admin') setNavByRole(adminNav);
    setActiveNav(user.user?.role === 'admin' ? 'users' : 'cabinet');
  }, [user.user?.role]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };


  return (
    <Styled.Container>
      <Styled.Header>
        <Link to="/">
          <img src={ Logo } alt="logo" />
        </Link>
        <Styled.Logout>
          <div>
            <Logout onClick={ logoutHandler } />
          </div>
        </Styled.Logout>
      </Styled.Header>
      <Styled.Main>
        <Styled.Nav>
          <Styled.NavLinks>
            { Object.keys(navByRole).map((key) => (
              <Link key={ key } to={ `/main/${key}` }>
                <Styled.NavLink
                  isActive={ key === activeNav }
                  type="button"
                  onClick={ () => setActiveNav(key) }
                >
                  <span>{ navByRole[key] }</span>
                </Styled.NavLink>
              </Link>
            )) }
          </Styled.NavLinks>
        </Styled.Nav>
        <Styled.Content>
          { children }
        </Styled.Content>
      </Styled.Main>
    </Styled.Container>
  );
};
