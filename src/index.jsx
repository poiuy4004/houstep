import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
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