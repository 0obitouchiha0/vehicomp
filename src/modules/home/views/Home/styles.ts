import styled from 'styled-components';

import backImg from '../../../../common/assets/img/auth-map.png';


export const Container = styled.div`
  z-index: 1;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: #3f51b5;
  background-image: url(${backImg});
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  cursor: pointer;
  font-weight: 400;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AuthModal = styled.div`
  display: flex;
  grid-gap: 10px;
  button {
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    background: transparent;
  }
`;

export const Main = styled.div`
  width: 900px;
`;

export const TitleContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 30px;
`;

export const TitleText = styled.p`
  font-size: 40px;
  font-weight: 300;
`;

export const MainForm = styled.div`
  display: inline-block;
  background-color: #fff;
  border-radius: 20px;
  padding: 40px;
`;

export const Additional = styled.p`
  padding: 10px;
`;
