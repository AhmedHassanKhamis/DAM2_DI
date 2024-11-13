import { BrowserRouter, Route, Routes } from "react-router-dom";
import CrearPeliculaPage from "./pages/CrearPeliculaPage";
import ListarPeliculasPage from "./pages/ListarPeliculasPage";



function App(params) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="crearPelicula" element={<CrearPeliculaPage />} />
                <Route path="listarPeliculas" element={<ListarPeliculasPage />} />
            </Routes>
        </BrowserRouter>


    )
}


export default App