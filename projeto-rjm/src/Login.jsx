const Login = ()=>{
    return (
        <form>
            <label>
                Nome ou E-mail:
                <input type="text" name="nome" placeholder="Digite seu nome ou e-mail" required/>
            </label>
            <label >
                Senha:
                <input type="password" name="senha" placeholder="Digite sua senha" required/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    );
}

export default Login;