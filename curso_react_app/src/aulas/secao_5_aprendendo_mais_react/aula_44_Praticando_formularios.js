import React, { Component } from "react";

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            error: "",
        }
    }

    cadastrar = (event) => {
        event.preventDefault();
        let {nome, email, senha} = this.state;

        if(nome === "" || nome === undefined) {
            this.setState({error: "Ops! Infrome o nome"});
            return;
        }

        if(email === "" || email === undefined) {
            this.setState({error: "Ops! Infrome o email"});
            return;
        }

        if(senha === "" || senha === undefined) {
            this.setState({error: "Ops! Infrome a senha"});
            return;
        }

        alert(`Nome: ${nome}, Email: ${email}, Senha: ${senha}`);     

    }

    

    render() {
        return (
            <div>
                <h2>Novo usuário</h2>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label htmlFor="name">Nome : </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={(nome) => this.setState({ nome: nome.target.value })} />
                    <br />
                    <br />

                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={this.state.email}
                        onChange={(email) => this.setState({ email: email.target.value })} />
                    <br />
                    <br />

                    <label htmlFor="senha">Senha : </label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={this.state.senha}
                        onChange={(senha) => this.setState({ senha: senha.target.value })} />
                    <br />
                    <br />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Formulario;