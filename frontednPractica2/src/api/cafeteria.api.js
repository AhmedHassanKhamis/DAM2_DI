import axios from 'axios';


const API = 'http://localhost:5050'


export const CheckArticuloRequest = async (articulo) => {
    await axios.post(`${API}/checkArticulo`,articulo)
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