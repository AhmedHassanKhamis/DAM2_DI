import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CheckArticuloPage from './pages/CheckArticuloPage.jsx'
import CrearPedidoPage from './pages/CrearPedidoPage.jsx'
import HistorialAlumnoPage from './pages/HistorialAlumnoPage.jsx'


function App(params) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/checkArticulo' element={<CheckArticuloPage />}/>
                <Route path='/historialAlumno' element={<HistorialAlumnoPage />}/>
                <Route path='/crearPedido' element={<CrearPedidoPage />}/>
            </Routes>
        </BrowserRouter>

    )
}



export default App