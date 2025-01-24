import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import Registro from "./components/Registro";
import RecSenha from "./components/Rec";
import App from './components/App';
import Principal from "./components/Principal";
import Get from "./API/User";

const Routers = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="login/recSenha" element={<RecSenha/>}/>
                <Route path="/principal" element={<Principal/>}/>
                <Route path="/usuarios" element={<Get/>}/>
            </Routes>
        </Router>   
    )
}

export default Routers;