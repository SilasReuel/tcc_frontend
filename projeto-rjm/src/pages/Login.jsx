const Login = ()=>{
    return (
        <form>
            <a href="/">Voltar</a>
            <br/>
            <br/>
            <label>
                Nome ou E-mail:<br/>
                <input type="text" name="nome" placeholder="Digite seu nome ou e-mail" required/>
            </label>
            <br/>
            <br/>
            <label >
                Senha:<br/>
                <input type="password" name="senha" placeholder="Digite sua senha" required/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Enviar"/>
        </form>
    );
}

export default Login;