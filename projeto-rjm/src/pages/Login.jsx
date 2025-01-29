import styles from '../ui/components/Login/Login.module.css'
import React, { useState } from "react";
import { getAPIName } from "../data/services/Crud";

const Login = ()=>{
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState({})
    
    function onSave(e) {
        e.preventDefault()
        getAPIName(name)
        .then((items) => {setUser(items)})
        .catch((e) => {
            setName('') 
            setPassword('') 
        });
        if (user != '') { 
            if(password == user.senha){ 
                location.href='principal'
                setName('') 
                setPassword('') 
            } else { 
                alert('Senha invalida!!')
                setPassword('') 
            } 
        } else { 
            alert('Nome invalido!!') 
            setName('') 
        }
        
    } 

    return (
        <div className={styles.login}>
            <center>
                <h1>Faça seu Login!</h1>
                <form onSubmit={onSave}>
                        <label>
                            Nome:<br/>
                            <input 
                                type="text" name="nome"
                                placeholder="Digite seu nome completo" required
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
                    <button type="submit">Entrar</button>
                </form>
                <a href="/registro"><button>Cadastre-se</button></a>
                <a href="/"><button>Voltar</button></a>
            </center>
        </div>
    );
}

export default Login;