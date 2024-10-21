import React, { Component } from 'react';

class Equipe extends Component {
    render() {
        return(
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <Sobre profissao={this.props.profissao} idade={this.props.idade}/>
                <p> teste {this.props.midia}</p>
                <Social midia={this.props.midia}/>
                <hr/>
            </div>
        )
    }
}

class Sobre extends Component {
    render() {
        return(
            <div>
                <p>Profissão: {this.props.profissao}</p>
                <p>Idade: {this.props.idade}</p>
            </div>
        )
    }
}

const Social = (props) => {
    return(
        <div>
            <p>Instagran: {props.midia}</p>
        </div>
    );
}


//EXEMPLO DE USO
// import Equipe from './aulas/aula_35_Aplicando_Class_component'

// export default function App() {
//   return(
//     <div>
//       <Equipe nome="Guilherme Costa" profissao="Desenvolvedor" idade="40" midia="@guilhermecosta"/>
//       <Equipe nome="Zaca Costa" profissao="Desenvolvedor" idade="40" midia="@zacacosta"/>
//     </div>
//   )
// }


export default Equipe;