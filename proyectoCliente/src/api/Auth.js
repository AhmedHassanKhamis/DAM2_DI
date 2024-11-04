import axios from 'axios';


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
