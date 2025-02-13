// import styles from '../ui/components/Registro/Registro.module.css'
import { useState } from 'react'
import {postAPIProj} from "../data/services/API"

export default function AddProj() {
    const [nome, setNome] = useState('')
    const [descricao, setDesc] = useState('')
    const dateFormatter = (date)=>{
        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short'
        }).format(date)
    }

    const onSave = async (e) => {
        e.preventDefault()
        let data = new Date()
        let data_criacao = dateFormatter(data)
        try {
            postAPIProj({nome, descricao, data_criacao})
        } catch (error){ }
    }

    return (
        <div>
            <center>
                <h1>Faça seu Cadastro!</h1>
                <form onSubmit={onSave}>
                    <label>
                        Título:<br/>
                        <input 
                            type="text" name="nome" 
                            placeholder="Digite o título" required 
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label >
                        Descrição:
                        <br/>
                        <input 
                            type="text" name="descricao" 
                            placeholder="Digite a descrição" required 
                            onChange={(e) => setDesc(e.target.value)}   
                        />
                    </label>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/principal"><button>Voltar</button></a>
            </center>
        </div>
    )
}