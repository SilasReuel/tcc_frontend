// Deve ser melhorado o estilo e colocado o caminho para envio do E-mail
import styles from './Rec.module.css'

const RecSenha = ()=>{
    return(
        <div className={styles.rec}>
            <center>
                <h1>Esqueceu sua Senha?</h1>
                <h5>Um código de recuperação será enviado</h5>
                <form action="" method="POST">
                    <label>
                    <input type="text" name="nome" placeholder="Digite o e-mail de sua conta" required/>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/login"><button>Voltar</button></a>
            </center>
        </div>
    )
};

export default RecSenha;