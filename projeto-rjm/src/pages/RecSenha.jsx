import styles from '../ui/components/Rec/Rec.module.css'
import React, { useEffect, useState } from "react";
import { getAPIName } from "../data/services/User";


const RecSenha = ()=>{
    const [user, setUser] = useState()
    const [name, setName] = useState('')
    
    useEffect(() => {
        if (name != ''){
            getAPIName(name).then((i) => { setUser(i) });
        }
    });

    function onSave(e){
        e.preventDefault()
        if(user != '') {
            window.location.href="../login"
        } else {
            alert("ERROR: Nome não identificado! Por favor tente novamente!")
        }    
    }

    return(
        <div className={styles.rec}>
            <center>
                <h1>Esqueceu sua Senha?</h1>
                <h5>Um código de recuperação será enviado</h5>
                <form onSubmit={onSave}>
                    <label>
                        <input 
                            type="name" name="nome" 
                            placeholder="Digite seu nome" required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/login"><button>Voltar</button></a>
            </center>
        </div>
    )
};

export default RecSenha;