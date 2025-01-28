import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import App from './App';
import Login from "./Login";
import Principal from "./Principal";
import RecSenha from "./RecSenha";
import Registro from "./Registro";
import User from "../API/User";

const Routers = ()=>{
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="login/recSenha" element={<RecSenha/>}/>
                <Route path="/principal" element={<Principal/>}/>
                <Route path="/usuarios" element={<User/>}/>
            </Routes>
        </Router>   
    )
}

export default Routers;