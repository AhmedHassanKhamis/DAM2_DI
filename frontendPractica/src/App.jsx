import {BrowserRouter,Route,Routes} from "react-router-dom"
import ComprobarArticuloPage from "./pages/ComprobarArticuloPage.jsx"
import HistorialPedidoPage from "./pages/HistorialPedidoPage.jsx"
import CreacionPedidoPage from "./pages/CreacionPedidoPage.jsx"
import CardsPedido from "./pages/CardsPedido.jsx"



function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="checkArticulo" element={<ComprobarArticuloPage />}/>
                <Route path="historialPedido" element={<HistorialPedidoPage />}/>
                <Route path="crearPedido" element={<CreacionPedidoPage />}/>
                <Route path="cardsPedido" element={<CardsPedido />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App