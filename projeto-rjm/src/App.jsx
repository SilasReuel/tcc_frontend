import './App.css'
import Login from './Login.jsx'
import Registro from './Registro.jsx'

function App() {
  function btn1 (){ // função teste
    <Login/>
  }
  return (
      <>
        <button onClick={()=>{<Login/>}}>Login</button> 
        <hr/>
        <input type="button" value="Registro" onClick={()=>{<Registro/>}} />
        {/* A função onClick não está funcionando */}
      </>
  )
}

export default App