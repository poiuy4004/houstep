import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
    @font-face {
      font-family: "Inter";
      src: url("./assets/Inter-Medium.ttf") format("truetype");
      unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    }
    @font-face {
      font-family: "Roboto";
      src: url("./assets/Roboto-Medium.ttf") format("truetype");
      unicode-range: U+AC00-D7A3, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    }
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
  }
  a{
    color: black;
    text-decoration: none;
  }
  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);