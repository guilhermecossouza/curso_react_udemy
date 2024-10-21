import React, {Component} from "react";

class Feed extends Component {
    render() {
        return (
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <p>Curtidas: {this.props.curtidas}</p>
                <p>{this.props.comentarios === 0 ? 
                    `Comentário: ${this.props.comentarios}` : 
                    `Comentários: ${this.props.comentarios}`}</p>
            </div>
        );
    }
}

export default Feed;