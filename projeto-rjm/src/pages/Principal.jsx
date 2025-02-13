import React, { useEffect, useState } from "react";
import { getAPIProj } from "../data/services/API.jsx";
import { offSession } from "../data/services/Session.jsx";
// import styles from '../ui/components/Registro/Registro.module.css'

export default function Princ() {
    const [proj, setProj] = useState([])

    useEffect(() => {
        let mounted = true;
        getAPIProj().then((items) => { setProj(items) });
        return () => (mounted = false);
    }, []);

    const A = (e)=>{
        e.preventDefault()
        location.href='/add/project'
    }

    return (
       <>
            <h1>Projetos</h1>
            <br/>
            <button onClick={A}>Adicionar Projeto</button>
            <br/><br/><br/>
            <table>
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Data de Criação</td>
                </tr>
                {(proj).map((i) => {
                    let data = new Date(i.data_criacao)
                    let mes = data.getMonth()
                    let ano = data.getFullYear()
                    let dia = data.getDate() + 1
                    let mesFormat = {   
                    0 : "Janeiro", 1 : "Fevereiro", 
                    2 : "Março", 3 : "Abril", 
                    4 : "Maio", 5 : "Junho", 
                    6 : "Julho", 7 : "Agosto", 
                    8 : "Setembro", 9 : "Outubro", 
                    10 : "Novembro", 11 : "Dezembro"
                    }
                    let format = `${dia} de ${mesFormat[mes]} de ${ano}`   
                    return (
                        <tr key={i.id}>
                                <td>{i.nome}</td>
                                <td>{i.descricao}</td>
                                <td>{format}</td>
                        </tr>
                )})}
            </table>
       </>
    );
}