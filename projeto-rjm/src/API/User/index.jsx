import axios from "axios";
import React, { useEffect, useState } from "react";

export const URL =  axios.create({
    baseURL: 'http://localhost:3000/api/v2'
})

function getAPIData() {
    return URL.get("/usuarios").then((response) => response.data);
}

function deleteAPIData(id) {
    return URL.delete(`usuarios/${id}`).then((response) => response.data);
}


function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        let mounted = true;
        getAPIData().then((items) => { setUser(items) });
        return () => (mounted = false);
    }, []);

    return (
        <table>
            <tr>
                <td>ID</td>
                <td>Nome</td>
                <td>E-mail</td>
                <td>Senha</td>
                <td>User Git</td>
            </tr>
            {(user).map(i => {
                return (
                    <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.nome}</td>
                            <td>{i.email}</td>
                            <td>{i.senha}</td>
                            <td>{i.user_git}</td>
                    </tr>
                )})
            }
        </table>
    );
}

export default User;