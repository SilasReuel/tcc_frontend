const Registro = ()=>{
    return (
        <form>
            <a href="/">Voltar</a>
            <br/>
            <br/>
            <label>
                Nome:<br/>
                <input type="text" name="nome" placeholder="Digite seu nome" required/>
            </label>
            <br/>
            <br/>
            <label >
                Senha:<br/>
                <input type="password" name="senha" placeholder="Digite sua senha" required/>
            </label>
            <br/>
            <br/>
            <label>
                E-mail:<br/>
                <input type="mail" name="email" placeholder="Digite seu e-mail" required/>
            </label>
            <br/>
            <br/>
            <label>
                Nome no Github:<br/>
                <input type="text" name="n_g" placeholder="Digite seu nome no github" required/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Enviar"/>
        </form>
    )
}

export default Registro