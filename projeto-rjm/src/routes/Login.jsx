// Deve ser melhorado o estilo e colocado o caminho para envio das informações
const Login = ()=>{
    return (
        <div class='forms'>
            <center>
                <h1>
                    Faça seu Login!
                </h1>
                <form action="" method="POST">
                    <table>
                        <tr>    
                            <label>
                                Nome ou E-mail:<br/>
                                <input type="text" name="nome" placeholder="Digite seu nome ou e-mail" required/>
                            </label>
                        </tr>
                        <br/>
                        <tr>
                            <label >
                                Senha:<br/>
                                <input type="password" name="senha" placeholder="Digite sua senha" required/>
                                <br/>
                                <a href="login/recSenha">Esqueci minha senha</a>
                            </label>
                        </tr>
                    </table>
                    <br/>
                    <button type="submit">Enviar</button>
                </form>
                <a href="/"><button>Voltar</button></a>
            </center>
        </div>
    );
}

export default Login;