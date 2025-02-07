// import styles from '../ui/components/Registro/Registro.module.css'
import { useState } from 'react'
import { postAPIUser, getAPIUser_Name } from '../data/services/API.jsx'

export default function Registro() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [user_git, setNg] = useState('')

    const onSave = async (e) => {
        e.preventDefault()
        try {
            const res = await getAPIUser_Name(nome)
            if(res != ''){
                alert("Já existe uma conta com essas credenciais!!")
            } else {
                postAPIUser({nome, email, senha, user_git})
            }
        } catch (error){

        }
    }

    return (
        <div className='registro'>
            <center>
                <h1>Faça seu Cadastro!</h1>
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