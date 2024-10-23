import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Grid from './Grid.jsx'
import Flex from './Flex.jsx'
import Practica1 from './Practica1.jsx'
import Navbar from './Navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Grid /> */}
    {/* <Flex /> */}
    <Navbar />
    <Practica1 />
  </StrictMode>,
)
