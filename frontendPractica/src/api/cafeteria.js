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