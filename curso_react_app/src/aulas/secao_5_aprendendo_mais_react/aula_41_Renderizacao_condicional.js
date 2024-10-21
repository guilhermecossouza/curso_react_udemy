import React, {Component} from "react";

class Usuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.logar = this.logar.bind(this);
        this.deslogar = this.deslogar.bind(this);
    }

    logar() {
        this.setState({status: true});
    }

    deslogar() {
        this.setState({status: false});
    }

    render() {
        return(
            <div>
                {this.state.status ? 
                    <div>
                        <h2>Bem vindo(a) ao sistema</h2>
                        <button onClick={this.deslogar}>Sair do sistema</button>
                    </div> : 
                    <div>
                        <h2>Voce não tem acesso ao sistema</h2>
                        <button onClick={this.logar}>Entrar no sistema</button>
                    </div>                    
                }
                
            </div>
        );
    }
}

export default Usuario;