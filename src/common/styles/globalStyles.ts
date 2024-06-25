import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    font-family: 'Roboto', sans-serif;
    border-collapse: collapse;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar:horizontal {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
      border: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #d8d8d8;
      border-radius: 3px;
      border-right: none;
      border-left: none;
    }
  }


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export { GlobalStyles };
