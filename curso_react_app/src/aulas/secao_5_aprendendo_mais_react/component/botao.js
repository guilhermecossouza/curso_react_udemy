import React, { Component } from "react";

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.name}</button>
            </div>
        );        
    }
}

export default Botao;