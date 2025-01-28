import styles from '../ui/components/Login/Login.module.css'
import React, { useState } from "react";
import { getAPIData } from "../../../data/services/Crud";

const Login = ()=>{
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState([])
    
    function onSave(e) {
        e.preventDefault()
        getAPIData().then((items) => { setUser(items) });
        return(
            <>
            {(user).forEach( (e) => {
                if(name == e.nome || name == e.email) 
                    if(password == e.senha)
                        window.location.href = 'usuarios'
                    else
                        console.log('Senha invalida')
            }, window.location.href = 'registro')}
            </>
        )
    } 

    return (
        <div className={styles.login}>
            <center>
                <h1>Faça seu Login!</h1>
                <form onSubmit={onSave}>
                        <label>
                            Nome ou E-mail:<br/>
                            <input 
                                type="text" name="nome"
                                placeholder="Digite seu nome ou e-mail" required
                                value={name}
                                onChange={(e)=> setName(e.target.value)}    
                            />
                        </label>
                        <br/>
                        <label >
                            Senha:<br/>
                            <input 
                                type="password" name="senha"
                                placeholder="Digite sua senha" required
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}
                            />
                            <br/>
                            <a href="login/recSenha">Esqueci minha senha</a>
                            <br/>
                        </label>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/"><button>Voltar</button></a>
            </center>
        </div>
    );
}

export default Login;