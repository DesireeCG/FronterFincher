import { createRoot } from 'react-dom/client'
import {App} from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import React from "react"; // <-- Importación necesaria
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)