import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from './utils/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraBaseProvider theme={theme}>
        <App />
    </ChakraBaseProvider>
  </StrictMode>,
)
