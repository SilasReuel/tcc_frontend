import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import RecSenha from "./routes/RecSenha";
import Home from "./routes/Home";

function Routers(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="login/recSenha" element={<RecSenha/>}/>
            </Routes>
        </Router>   
    )
}

export default Routers;