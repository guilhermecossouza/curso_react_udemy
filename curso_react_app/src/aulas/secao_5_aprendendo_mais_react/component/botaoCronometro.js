import React, { Component } from "react";

class BotaoCronometro extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nameButton}</button>   
            </div>
        );
    }
}

export default BotaoCronometro;