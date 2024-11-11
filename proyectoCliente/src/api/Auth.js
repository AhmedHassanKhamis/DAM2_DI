import axios, { Axios } from 'axios';


const API ='http://localhost:5000';


export const registerRequest = (user) => {
    axios.post(`${API}/register`,user)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

}

export const loginRequest = (user) => {
    axios.post(`${API}/login`,user)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

}

export const removeRequest = (user) => {
    axios.post(`${API}/remove`,user)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

}

export const updateRequest = (user) => {
    axios.post(`${API}/update`,user)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

}


export const searchRequest = () => {
    axios.get(`${API}/search`)
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })

}







//VARIABLE PARA DEFINIR LA DIRECCION DE MI SERVIDOR
// const API ='http://localhost:5000';


// ENDPOINT "FRONTAL" PARA DEVOLVER EL LISTADO DE USUARIOS
export const getUsuarios =  await axios.get(`${API}/search`)


