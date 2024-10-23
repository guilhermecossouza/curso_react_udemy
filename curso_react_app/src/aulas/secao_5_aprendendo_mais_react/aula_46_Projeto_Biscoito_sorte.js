import React, { Component } from "react";
import "./statics/estilo.css";
import Botao from "./component/botao"


class BiscoitoSorte extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: "",
        };
        this.frases = [
            'Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.',
        ]
    }  
    
    quebrarBiscoito = () => {
        let state = this.state;
        let index = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = "''" +this.frases[index]+"''";
        this.setState(state);
    }

    render() {
        return(
            <div className="container">
                <img src={require("./assests/biscoito.png")} alt="biscoito"  className="img"/>
                <Botao name="Abir Biscoito Sorte" acaoBtn={this.quebrarBiscoito}/>
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

export default BiscoitoSorte;