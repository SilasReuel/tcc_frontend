import styles from '../ui/components/Registro/Registro.module.css'
import { useState } from 'react'
import { postAPIData } from '../data/services/Crud'

const Registro = ()=>{
    // armazena as informações do forms
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [user_git, setNg] = useState('')

    function onSave(e){
        e.preventDefault()
        postAPIData({nome, email, senha, user_git})
        // joga para o login
        window.location.href="login"
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