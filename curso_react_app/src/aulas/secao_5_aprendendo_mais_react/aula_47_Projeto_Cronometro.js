import React, { Component } from "react";
import "./statics/cronometro.css";
import BotaoCronometro from "./component/botaoCronometro";

class Cronometro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            nomeButton: "Iniciar" 
        }
        this.timer = null;
        this.iniciarPararCronometro = this.iniciarPararCronometro.bind(this);
    }

    iniciarPararCronometro() {
        let state = this.state;
        if(state.nomeButton === "Iniciar") {
            state.nomeButton = "Parar";
            this.timer = setInterval(() => {
                state.numero += 0.1;
                this.setState(state);
            },100);            
        }else {
            state.nomeButton = "Iniciar";
            clearInterval(this.timer);
            this.setState(state);   
        } 
    }

    render() {
        return(
            <div className="container">
                <h1>{this.state.numero.toFixed(1)}</h1>
                <BotaoCronometro nameButton={this.state.nomeButton} acaoBtn={this.iniciarPararCronometro}/>
                <br/>
                <button onClick={() => this.setState({numero: 0})}>Limpar</button>
            </div>
        );
    }
}

export default Cronometro;