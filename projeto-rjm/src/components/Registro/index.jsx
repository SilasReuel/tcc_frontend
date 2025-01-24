// Deve ser melhorado o estilo e colocado o caminho para envio das informações
import { useEffect, useState } from 'react'
import styles from './Registro.module.css'
import axios from "axios";

const Registro = ()=>{
    // caminho para da API
    const API_URL = "http://localhost:3000/api/v2/usuarios"
    // armazena as informações do forms
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [user_git, setNg] = useState('')

    function onSave(e){
        e.preventDefault()
        postAPIData({nome, email, senha, user_git})
        // Limpa as variáveis
        setNome('')
        setSenha('')
        setEmail('')
        setNg('')
        // joga para o login
        window.location.href="login"
    }
    // função de post
    function postAPIData( param ) {
        return axios.post(API_URL, param)
    }
    // forms
    return (
        <div className={styles.registro}>
            <center>
                <h1>
                    Faça seu Cadastro!
                </h1>
                <form onSubmit={onSave}>
                    <label>
                        Nome:<br/>
                        <input 
                            type="text" name="nome" 
                            placeholder="Digite seu nome" required
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label >
                        Senha:
                        <br/>
                        <input 
                            type="password" name="senha" 
                            placeholder="Digite sua senha" required
                            onChange={(e) => setSenha(e.target.value)}    
                        />
                    </label>
                    <br/>
                    <label>
                        E-mail:<br/>
                        <input 
                            type="mail" name="email" 
                            placeholder="Digite seu e-mail" required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                    Nome no Github:<br/>
                    <input 
                        type="text" name="ng" 
                        placeholder="Digite seu nome no github" required
                        onChange={(e) => setNg(e.target.value)}
                    />
                    </label>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/"><button>Voltar</button></a>
            </center>
        </div>
    )
}

export default Registro