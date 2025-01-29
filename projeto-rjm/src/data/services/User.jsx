import axios from "axios";

export const URL =  axios.create({
    baseURL: 'http://localhost:3000/api/v2'
})

export function getAPIData() {
    return URL.get("/usuarios").then((res) => res.data);
}

export function getAPIName(name) {
    return URL.get(`/usuarios/nome/${name}`)
    .then((res) => res.data)
    .catch((res) => res)
}

export function deleteAPIData(id) {
    return URL.delete(`/usuarios/${id}`).then((res) => res.data);
}

export function postAPIData(param) {
    return URL.post('/usuarios', param).then((res) => res.data);
}

export function deleteAPI(id) {
    return URL.delete(`/usuarios/${id}`).then((res) => res.data);
}