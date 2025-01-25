import axios from "axios";
import React, { useEffect, useState, Fragment} from "react";

const API_URL = "http://localhost:3000/api/v2/usuarios"

function getAPIData() {
    return axios.get(API_URL).then((response) => response.data);
}

function User() {
    const [user, setUser] = useState([])

    useEffect(() => {
        let mounted = true;
        getAPIData().then((items) => { setUser(items) });
        return () => (mounted = false);
    }, []);
    return (
        <>
            {(user).map(i => {
                return (
                        <div key={i.id}>
                            <center>
                                <br/>ID: {i.id}<br/>
                                <br/>Nome: {i.nome}<br/>
                                <br/>E-mail: {i.email}<br/>
                                <br/>Senha: {i.senha}<br/>
                                <br/>User Git: {i.user_git}
                            </center>
                        </div>
                    )
                })
            }
        </>
    );
}

export default User;