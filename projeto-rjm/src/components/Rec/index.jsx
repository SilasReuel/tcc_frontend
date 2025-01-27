import styles from './Rec.module.css'
import axios from "axios";
import React, { useEffect, useState } from "react";


const RecSenha = ()=>{
    const [user, setUser] = useState([])
    const [email, setEmail] = useState('')
    const GET_URL = "http://localhost:3000/api/v2/usuarios"
    
    useEffect(() => {
        let mounted = true;
        getAPIData().then((i) => { setUser(i) });
        return () => (mounted = false);
    }, []);

    function getAPIData() {
        return axios.get(GET_URL).then((response) => response.data);
    }

    function onSave(e){
        e.preventDefault()
        
        {(user).map(i => {
            if(email == i.email) { // necessita-se de estudo
                window.location.href="../login"
            } else {
            }})
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
                            type="mail" name="email" 
                            placeholder="Digite o e-mail de sua conta" required
                            onChange={(e) => setEmail(e.target.value)}
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