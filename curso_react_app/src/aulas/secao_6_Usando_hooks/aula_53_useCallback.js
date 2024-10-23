import React, { useState, useEffect, useMemo, useCallback } from "react";

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


    const addTarefa = useCallback(() => {
        setTarefas([tarefas, input]);
        setInput("");

    },[tarefas, input]);

    const tatalTarefas = useMemo(() => tarefas.length, [tarefas])

    return(
        <div>
            <strong>Você tem {tatalTarefas} a fazer;</strong>
            <ul>{tarefas.map((tarefa) => <li key={tarefa}>{tarefa}</li>)}</ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={addTarefa}>Adicionar tarefa</button>
        </div>
    );
}
