import styles from '../ui/components/Login/Login.module.css'
import React, { useEffect, useState } from "react";
import { getAPIName } from "../data/services/User";

const Login = ()=>{
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [user, setUser] = useState()
    useEffect(()=>{
        if (name != ''){
            getAPIName(name).then((e) => { setUser(e) })
        }
    })
    
    function onSave(e) {
        e.preventDefault()
        console.log(user)
        if (user != '') { 
            if(password == user.senha)
                location.href='principal'
        } else { 
            alert("Credenciais invalidas! Por favor tente novamente!")
        }
       setName('') 
       setPassword('') 
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