// Deve ser melhorado o estilo para fique mais atrativo
import React from "react";
import styles from '../ui/components/App/App.module.css'

const App = ()=>{
  return (
    <div className={styles.app}>    
      <center>
        <h1>Seja Bem-vindo!!</h1>
        <p>Faça seu login clicando no botão abaixo</p>
        <a href='/login'><button>Login</button></a>
      </center>
    </div>
  )
}

export default App;