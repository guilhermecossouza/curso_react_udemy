import React, {Component} from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            sexo: ""
        }
    }

    trcarValor = (value) => {
        this.setState({email: value.target.value.trim()})
    }

    render() {
        return(
            <div>
                <h2>Login</h2>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" value={this.state.email}  onChange={this.trcarValor}/>
                </div>
                <br/>
                <div>
                    <label for="password">Senha:</label>
                    <input type="password" name="password" id="password" value={this.state.senha} 
                           onChange={(e) => this.setState({senha: e.target.value.trim()})}/>
                </div>
                <br/>
                <select name="sexo" id="sexo" value={this.state.sexo} onChange={(e) => this.setState({sexo: e.target.value})}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.sexo}</h3>
                </div>
            </div>
        )
    }
}

export default Formulario;