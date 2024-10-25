import React, { useEffect, useState } from "react";
import "../static/bootstrap.css";

export default function Blog() {
    const [nutri, setNutri] = useState([])
    const [urlApiNutri, setUrlApiNutri] = useState("https://sujeitoprogramador.com/rn-api/?api=posts")

    useEffect(() => {
        const loadApi = async () => {
            const response = await fetch(urlApiNutri, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const nutriJson = await response.json();
            setNutri(nutriJson);
        }
        loadApi();

    }, []);

    return (
        <div>
            <nav className="navbar bg-success mb-3">
                <div className="container-fluid">
                    <p className="navbar-brand text-white h3">React Saúde</p>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                {nutri.map((dadosJson) => {
                    return (
                        <div className="card m-1" style={{ width: "18rem" }} key={dadosJson.id}>
                            <img src={dadosJson.capa} className="card-img-top mt-3" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{dadosJson.titulo}</h5>
                                <p className="card-text">{dadosJson.subtitulo}</p>
                                <p className="card-text"><strong>Categoria</strong> : {dadosJson.categoria}</p>
                            </div>
                        </div>
                    )
                })}
                </div>

            </div>
        </div>
    );
}