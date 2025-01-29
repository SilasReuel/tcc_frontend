import styles from '../ui/components/Registro/Registro.module.css'
import { useEffect, useState } from 'react'
import { postAPIData, getAPIName } from '../data/services/User'

const Registro = ()=>{
    // armazena as informações do forms
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [user_git, setNg] = useState('')
    const [user, setUser] = useState()

    useEffect(() => {
            if (nome != ''){
                getAPIName(nome).then((i) => { setUser(i) });
            }
        });

    function onSave(e){
        e.preventDefault()
        console.log(user)
        if(user != ''){
            alert("Já existe uma conta com essas credenciais!!")
        } else {
            postAPIData({nome, email, senha, user_git})
            window.location.href="login"
        }
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
                <a href="/login"><button>Voltar</button></a>
            </center>
        </div>
    )
}

export default Registro