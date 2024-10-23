import React, { useState } from "react";

export default function Tarefas() {
    const tarefasRealizar = [
        "Pagar a conta de luz",
        "Pagar o aluguel",
        "Estudar TypeScript",
        "Estudar Python",
    ]
    const [tarefas, setTarefas] = useState(tarefasRealizar);
    const [nome, setNome] = useState("Guilherme Costa");
    const [input, setInput] = useState("");

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
