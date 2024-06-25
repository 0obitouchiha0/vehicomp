import styled from 'styled-components';
import MuiTabs from '@mui/material/Tabs';


export const Tabs = styled(MuiTabs)({
  background: '#303F9F',
});

export const Container = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-30%) translateX(-50%);
  opacity: 1;
`;
