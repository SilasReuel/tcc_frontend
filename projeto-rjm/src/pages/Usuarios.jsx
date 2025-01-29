import React, { useEffect, useState } from "react";
import { getAPIData } from "../data/services/Crud";

function Usuarios() {
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
            {(user).map((i) => {
                return (
                    <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.nome}</td>
                            <td>{i.email}</td>
                            <td>{i.senha}</td>
                            <td>{i.user_git}</td>
                    </tr>
            )})}
        </table>
    );
}

export default Usuarios;