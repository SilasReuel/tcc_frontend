import axios from "axios";

export const URL =  axios.create({
    baseURL: 'http://localhost:3000/api/v2'
})

export function getAPIData() {
    return URL.get("/usuarios").then((response) => response.data);
}

export function getAPIName(name) {
    return URL.get(`/usuarios/nome/${name}`)
    .then((response) => response.data)
    .catch((e) => alert("Credenciais invalidas") );
}

export function deleteAPIData(id) {
    return URL.delete(`/usuarios/${id}`).then((response) => response.data);
}

export function postAPIData(param) {
    return URL.post('/usuarios', param).then((response) => response.data);
}