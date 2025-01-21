// Deve ser melhorado o estilo e colocado o caminho para envio das informações
import styles from './Registro.module.css'

const Registro = ()=>{
    return (
        <div className={styles.registro}>
            <center>
                <h1>
                    Faça seu Cadastro!
                </h1>
                <form action="" method="POST">
                    <table>
                        <tr>
                            <label>
                                Nome:<br/>
                                <input type="text" name="nome" placeholder="Digite seu nome" required/>
                            </label>
                        </tr>
                        <br/>
                        <tr>
                            <label >
                                Senha:<br/>
                                <input type="password" name="senha" placeholder="Digite sua senha" required/>
                            </label>
                        </tr>
                        <br/>
                        <tr>
                            <label>
                                E-mail:<br/>
                                <input type="mail" name="email" placeholder="Digite seu e-mail" required/>
                            </label>
                        </tr>
                        <br/>
                        <tr>
                            <label>
                                Nome no Github:<br/>
                                <input type="text" name="n_g" placeholder="Digite seu nome no github" required/>
                            </label>
                        </tr>
                    </table>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/"><button>Voltar</button></a>
            </center>
        </div>
    )
}

export default Registro