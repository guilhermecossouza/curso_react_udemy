import React, { useState, useEffect } from "react";

export default function Tarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const localStorageTarefas = localStorage.getItem("tarefas");
        if(localStorageTarefas) {
            setTarefas(JSON.parse(localStorageTarefas));
        } 
    }, []);

    /**
     * Controla o ciclo de vida do componente
     * 1. Função que é executada quando o componente aparece na tela
     * 2. Função que é executada quando o componente não aparece mais na tela   
     * recebe dois parâmetros:
     * função () => {}
     * e o componente que ele vai monitorar como array
     */
    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    function addTarefa() {
        setTarefas([...tarefas, input]);
        setInput("");
    }
    return(
        <div>
            <ul>{tarefas.map((tarefa) => <li key={tarefa}>{tarefa}</li>)}</ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addTarefa}>Adicionar tarefa</button>
        </div>
    );
}
