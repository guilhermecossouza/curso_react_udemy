import React, {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "Guilherme Costa",
      contador: 0
    }

    //this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  //Outra forma de instanciar a classe sem usar o bind
  aumentar = () => {
    let state = this.state;
    state.contador++;
    state.nome = "Zaca Costa";
    this.setState(state);
  }

  // aumentar() {
  //   let state = this.state;
  //   state.contador++;
  //   state.nome = "Zaca Costa";
  //   this.setState(state);
  // }

  diminuir(){
    let state = this.state;
    if(this.state.contador === 0) return;
    state.contador--;
    this.setState(state);

  }

  render() {
    return(
      <div>
        <h1>Contador</h1>
        <p>Nome: {this.state.nome}</p>
        <h3>
          <button onClick={this.diminuir}> - </button>&nbsp;
            {this.state.contador}&nbsp;
          <button onClick={this.aumentar}> + </button>
        </h3>
      </div>
    );
  }
}

export default App;