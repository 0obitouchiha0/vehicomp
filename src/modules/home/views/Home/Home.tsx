import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '@common/store/store';
import authLogo from '@img/auth-logo.png';
import authArrow from '@img/auth-arrow.png';
import { MainForm } from '@common/components/MainForm/MainForm';
import { AuthModal } from '@common/components/AuthModal/AuthModal';


import * as Styled from './styles';
import { authThunk } from '../../../../common/store/reducers/userReducer';


export const Home = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const dispatch = useAppDispatch();
  const { auth, user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authThunk());
    if (auth) navigate(user?.role === 'admin' ? '/main/users' : '/main/cabinet');
  }, [auth]);

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <img src={ authLogo } alt="logo" />
        </div>
        <Styled.RightContainer>
          <Styled.AuthModal>
            <button type="button" onClick={ () => setIsVisibleModal(true) }>
              Вход / Регистрация
            </button>
            <div>
              <img src={ authArrow } alt="" />
            </div>
          </Styled.AuthModal>
        </Styled.RightContainer>
      </Styled.Header>
      <Styled.Main>
        <Styled.TitleContainer>
          <Styled.TitleText>Оставить заявку</Styled.TitleText>
        </Styled.TitleContainer>
        <Styled.MainForm>
          <MainForm variant="filled" />
        </Styled.MainForm>
      </Styled.Main>
      { isVisibleModal
        && <AuthModal setIsVisibleModal={ setIsVisibleModal } /> }
    </Styled.Container>
  );
};
