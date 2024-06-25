import styled, { css } from 'styled-components';

import backImg from '@img/auth-map.png';


export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url(${backImg});
  background-size: cover;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Profile = styled.div`
  display: flex;
  grid-gap: 20px;
`;

export const ProfileTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const Role = styled.button`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
`;

export const Logout = styled.div`
  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.4s ease-in-out;
  &:hover {
    background-color: #A8DBE7;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0.8fr 3fr;
  gap: 50px;
  min-height: 80vh;
  padding: 50px;
`;

export const Nav = styled.div`
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 30px;
  padding: 10px 0 10px 20px;
  background-color: #1874D0;
`;

export const NavLink = styled.button<{ isActive: boolean }>`
  width: calc(100% - 20px);
  font-weight: 500;
  font-size: 20px;
  color: #fff;
  background-color: #1874D0;
  padding: 20px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #1874D0;
  }
  ${({ isActive }) => isActive && css`
    background-color: #fff;
    color: #1874D0;
    transition: background-color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  `}
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
