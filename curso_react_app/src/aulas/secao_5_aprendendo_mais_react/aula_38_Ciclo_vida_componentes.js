import React, {Component} from 'react'

class DataHor extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            hora: "00:00:00"
        }
    }

    //Esta função só roda uma vez quando o componente aparece na tela
    componentDidMount() {
        setInterval(() => {
            this.setState({ hora: new Date().toLocaleTimeString() })
        }, 1000)
    }

    //executa toda vez que o componebte é atualizado
    componentDidUpdate() {
        console.log("O componente foi atualizado");
    }

    //retorna true ou false para saber se o componente deve ou não ser atualizado
    shouldComponentUpdate() {
        return true;
    }

    render() {
        return(
            <div>
                <p>Horário: {this.state.hora}</p>
            </div>
        )
    }
}

export default DataHor;