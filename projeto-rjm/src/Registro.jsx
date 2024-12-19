const Registro = ()=>{
    return (
        <form>
            <label>
                Nome:
                <input type="text" name="nome" placeholder="Digite seu nome" required/>
            </label>
            <label >
                Senha:
                <input type="password" name="senha" placeholder="Digite sua senha" required/>
            </label>
            <label>
                E-mail:
                <input type="mail" name="email" placeholder="Digite seu e-mail" required/>
            </label>
            <label>
                Nome no Github:
                <input type="text" name="n_g" placeholder="Digite seu nome do github" required/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    )
}

export default Registro