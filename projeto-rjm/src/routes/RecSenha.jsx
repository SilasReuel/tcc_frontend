// Deve ser melhorado o estilo e colocado o caminho para envio do E-mail
const RecSenha = ()=>{
    return(
        <div class='forms'>
            <center>
                <h1>Esqueceu sua Senha?</h1>
                <h4>Preencha o campo abaixo com seu e-mail.<br/>Será enviado um Link/Código de recuperação!</h4>
                <form action="" method="POST">
                    <table>
                            <tr>    
                                <label>
                                    <input type="text" name="nome" placeholder="Digite o e-mail" required/>
                                </label>
                            </tr>
                    </table>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/login"><button>Voltar</button></a>
            </center>
        </div>
    )
};

export default RecSenha;