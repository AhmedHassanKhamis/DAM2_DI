import {BrowserRouter,Route,Routes} from "react-router-dom"
import ComprobarArticuloPage from "./pages/comprobarArticuloPage"
import HistorialPedidoPage from "./pages/historialPedidoPage"
import CreacionPedidoPage from "./pages/creacionPedidoPage"



function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="checkArticulo" element={<ComprobarArticuloPage />}/>
                <Route path="historialPedido" element={<HistorialPedidoPage />}/>
                <Route path="crearPedido" element={<CreacionPedidoPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App