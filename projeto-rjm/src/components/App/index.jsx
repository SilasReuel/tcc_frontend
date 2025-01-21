// Deve ser melhorado o estilo para fique mais atrativo
import React, { useState, useEffect } from "react";
import styles from './App.module.css'

const App = ()=>{
  return (
    <>
      <div className={styles.app}>    
        <center>
          <h1>Seja Bem-vindo!!</h1>
          <a href='/login'><button>Login</button></a>
          <a href='/registro'><button>Registro</button></a>
          <a href='/principal'><button>Principal</button></a>
        </center>
      </div>
    </>
  )
}

export default App;