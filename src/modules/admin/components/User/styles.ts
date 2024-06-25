import styled from 'styled-components';


export const Order = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  background-color: #1874D0;
  border-radius: 30px;
  padding: 30px;
  color: #ffffff;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const ContactInfo = styled.p`
  margin-left: 30px;
`;
