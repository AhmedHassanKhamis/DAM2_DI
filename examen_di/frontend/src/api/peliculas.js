import axios from "axios"

const API = 'http://localhost:5050'

export const CrearPeliculaRequest = async (pelicula) => {
    await axios.post(`${API}/crearPelicula`,pelicula)
    .then(
        function (response) {
            console.log(response)
        }
    )
    .catch(
        function (error) {
            console.log(error)
        }
    )
    
}

export const ListarPeliculas = await axios.get(`${API}/listarPeliculas`)