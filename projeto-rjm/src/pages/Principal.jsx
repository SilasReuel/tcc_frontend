import React, { useEffect, useState } from "react";
import { getAPIProj } from "../data/services/API.jsx";
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
                    return (
                        <tr key={i.id}>
                                <td>{i.nome}</td>
                                <td>{i.descricao}</td>
                                <td>{i.data_criacao}</td>
                        </tr>
                )})}
            </table>
       </>
    );
}