import { Link } from "react-router-dom";

function Home () {
    return(
      <div>
        <h1>Bem vindo(a) a página Home</h1>
        <ul>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </div>
    );
  }
  export default Home;