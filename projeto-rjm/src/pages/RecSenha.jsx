// import styles from '../ui/components/Rec/Rec.module.css'
import React, { useState } from "react";
import { getAPIUser_Name } from "../data/services/API.jsx";

export default function RecSenha() {
    const [name, setName] = useState('')

    const onSave = async (e) => {
        e.preventDefault()
        try {
            const res = await getAPIUser_Name(name)
            setName('')
            if (res != '') { 
                window.location.href="../login"
            } else { 
                alert("ERROR: Nome não identificado! Por favor tente novamente!")
            }
        } catch (err) { }
    } 

    return(
        <div>
            <center>
                <h1>Esqueceu sua Senha?</h1>
                <h5>Um código de recuperação será enviado</h5>
                <form onSubmit={onSave}>
                    <label>
                        <input 
                            type="name" name="nome" 
                            placeholder="Digite seu nome" required
                            value={name} autoComplete='off'
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/login"><button>Voltar</button></a>
            </center>
        </div>
    )
}