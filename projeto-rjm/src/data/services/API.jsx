import axios from "axios";

export const URL =  axios.create({
    baseURL: 'http://localhost:3000/api/v2'
})

// CRUD's Users
export function postAPIUser(param) {
    return URL.post('/usuarios', param).then((res) =>{
        res.data
        let bool = confirm("Adicionado com sucesso! Aperte OK para ir até login.")
        if(bool)
            location.href='/login'
    });
}

export function getAPIUser() {
    return URL.get("/usuarios").then((res) => res.data);
}

export function getAPIUser_Name(name) {
    return URL.get(`/usuarios/nome/${name}`)
    .then((res) => res.data)
    .catch((res) => res)
}

export function updateAPIUser(id) {
    return URL.put(`/usuarios/${id}`).then((res) => res.data);
}

export function deleteAPIUser(id) {
    return URL.delete(`/usuarios/${id}`).then((res) => res.data);
}

// CRUD's Projetos
export function postAPIProj(param) {
    return URL.post('/projetos', param).then((res) => {
        res.data
        let bool = confirm("Adicionado com sucesso! Aperte OK para restornar à página anterior.")
        if(bool)
            location.href='../principal'
    });
}

export function getAPIProj() {
    return URL.get("/projetos").then((res) => res.data);
}

export function updateAPIProj(id) {
    return URL.put(`/projetos/${id}`).then((res) => res.data);
}

export function deleteAPIProj(id) {
    return URL.delete(`/projetos/${id}`).then((res) => res.data);
}