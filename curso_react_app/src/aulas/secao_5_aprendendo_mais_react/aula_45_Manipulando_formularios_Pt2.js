import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: "",
                email: "",
                senha: "",
                sexo: "",
            }
        }
        this.cadastrar = this.cadastrar.bind(this);
        this.trocaValor = this.trocaValor.bind(this);
    }

    cadastrar(event) {
        event.preventDefault();
        //let {nome, email, senha, sexo}
    }

    trocaValor(event) {
        let form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({form: form});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <input type="text" name="nome" value={this.state.form.nome} onChange={this.trocaValor}/><br/>
                    <br/>
                    <label>Email: </label>
                    <input type="text" name="email" value={this.state.form.email} onChange={this.trocaValor}/><br/>
                    <br/>

                    <label>Senha: </label>
                    <input type="text" name="senha" value={this.state.form.senha} onChange={this.trocaValor}/><br/> 
                    <br/>

                    <label>Sexo: </label>
                    <select name="sexo" value={this.state.form.sexo} onChange={this.trocaValor}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                    <br/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default Formulario;