import React, {Component} from 'react'
import Feed from './feeds';

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: [
                {id: 1, nome: "Guilherme Costa", curtidas: 200, comentarios: 100},
                {id: 2, nome: "Zilda Costa", curtidas: 100, comentarios: 50},
                {id: 3, nome: "Kenia Costa", curtidas: 500, comentarios: 300},
                {id: 4, nome: "Zaca Costa", curtidas: 2, comentarios: 2},
                {id: 5, nome: "Ricardo", curtidas: 1, comentarios: 0}
            ]
        }
    }

    render() {
        return(
            <div>
                {this.state.lista.map((item) => {
                    return(
                        <div key={item.id}>
                            <Feed id={item.id} nome={item.nome} curtidas={item.curtidas} comentarios={item.comentarios} />
                        </div>
                    ); 
                })}
            </div>
        );
    }
}

export default Lista;