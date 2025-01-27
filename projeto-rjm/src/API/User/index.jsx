import axios from "axios";
import React, { useEffect, useState } from "react";

const GET_URL = "http://localhost:3000/api/v2/usuarios"

function getAPIData() {
    return axios.get(GET_URL).then((response) => response.data);
}

function deleteAPIData(id) {
    return axios.delete(`http://localhost:3000/api/v2/usuarios/${id}`).then((response) => response.data);
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