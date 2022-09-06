import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bgGradient: "linear(to-r, cyan.50, blue.100)",
        color: 'black',
      },
      // styles for the `a`
      // a: {
      //   color: 'black',
      //   transition: 'transform .3s',
      //   _hover: {
      //     transform: 'scale(1.1)',
      //   },
      //   zIndex:'999'
      // }
    },
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
