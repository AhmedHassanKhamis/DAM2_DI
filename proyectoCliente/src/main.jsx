import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Grid from './pages/Grid.jsx'
import Flex from './pages/Flex.jsx'
import Practica1 from './pages/Practica1.jsx'
import Navbar from './pages/Navbar.jsx'
import App2 from './App2.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Grid /> */}
    {/* <Flex /> */}
    {/* <Navbar /> */}
    {/* <Practica1 /> */}
    <App2 />
  </StrictMode>,
)
