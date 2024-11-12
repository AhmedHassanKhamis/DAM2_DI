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



// export async function HistorialPedidoRequest(articulo) {
//     try {
//         const response = await axios.get(`${API}/historialAlumno`,articulo);
//         console.log(response);
//         return response;
//     } catch (error) {
//         console.log(error);
//         throw error;
//     }
// }


// export const  HistorialPedidoRequest =  (articulo) => {
//     axios.post(`${API}/historialAlumno`,articulo)
//     .then(
//         function (response) {
//             console.log(response)
//             return response
//         }
//     ).catch(
//         function (error) {
//             console.log(error)    
//         }
//     )
// }

export const HistorialPedidoRequest = await axios.get(`${API}/historialAlumno`)
