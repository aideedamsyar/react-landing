import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './components/Theme'





ReactDOM.render(
  <React.StrictMode>
    
      <ChakraProvider theme={theme}>
        <ColorModeScript intialColorMode={'#E5E5E5'}></ColorModeScript>
        
          <App/>
        
      </ChakraProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

