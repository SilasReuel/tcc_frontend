// Deve ser melhorado o estilo para fique mais atrativo
import React, { useState, useEffect } from "react";

const Home = ()=>{
  return (
    <div class="home">
      <center>
        <h1>Seja Bem-vindo</h1>
        <a href='/login'><button>Login</button></a>
        <a href='/registro'><button>Registro</button></a>
      </center>
    </div>
  )
}

export default Home;