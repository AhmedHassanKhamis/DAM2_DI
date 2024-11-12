import axios from 'axios';



const API = "http://localhost:5050"

export const  ComprobarArticulosRequest =  (articulo) => {
    axios.post(`${API}/checkArticulo`,articulo)
    .then(
        function (response) {
            console.log(response)    
        }
    ).catch(
        function (error) {
            console.log(error)    
        }
    )
}


export const  CrearPedidoRequest =  (articulo) => {
    axios.post(`${API}/crearPedido`,articulo)
    .then(
        function (response) {
            console.log(response)    
        }
    ).catch(
        function (error) {
            console.log(error)    
        }
    )
}



// export const  HistorialPedidoRequest = async (articulo) => {
//     return await axios.get(`${API}/historialAlumno`,articulo)
//     .then(function (response) {
//         console.log(response)
//     }
//     )
//     .catch(
//         function (error) {
//             console.log(error)    
//         }
//     )
    
// }

export const HistorialPedidoRequest = (articulo) =>  {return axios.get(`${API}/historialAlumno`,articulo)}
