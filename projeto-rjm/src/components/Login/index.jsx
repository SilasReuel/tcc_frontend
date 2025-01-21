import { useState } from "react";
import styles from './Login.module.css'

// Deve ser melhorado o estilo e colocado o caminho para envio das informações
const Login = ()=>{
    const [name, setName] = useState()
    const [password, setPassaword] = useState()
    const [login, setLogin] = useState([])

    function onSave(e) {
        e.preventDefault()
        console.log("Nome: "+name+",\tSenha: "+password)
        const Dados = {name, password}
        setLogin([...login, Dados])
        console.log(login)
    } 

    return (
        <div className={styles.login}>
            <center>
                <h1>
                    Faça seu Login!
                </h1>
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
                                onChange={(e)=> setPassaword(e.target.value)}
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