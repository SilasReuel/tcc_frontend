import axios from "axios";

export const URL =  axios.create({
    baseURL: 'http://localhost:3000/api/v2'
})

export function getAPIData() {
    return URL.get("/usuarios").then((response) => response.data);
}

export function deleteAPIData(id) {
    return URL.delete(`usuarios/${id}`).then((response) => response.data);
}