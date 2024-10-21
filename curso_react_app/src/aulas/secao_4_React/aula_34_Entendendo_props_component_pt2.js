const Equipe = (props) => {
    return(
      <div>
        <h1>Nome: {props.nome}</h1>
        <Sobre cargo={props.cargo} idade={props.idade}/>
        <RedesSociais mida-social={props["mida-social"]} search-midia={props["search-midia"]}/>
        <hr/>
      </div>
    );
  }
  
  const Sobre = (props) => {
    return(
      <div>
        <p>Cargo: {props.cargo}</p>
        <p>Idade: {props.idade}</p>
      </div>
    );
  }

  const RedesSociais = (props) => {
    return(
        <div>
          <p>Mida Social: {props["mida-social"]}</p>
          <p>Search Midia: {props["search-midia"]}</p>
        </div>
    );
  }

  //EXEMPLO DE USO
  // export default function App() {
  //   return(
  //     <div>
  //       <p>========AULA 34 COMPONENTS========</p>
  //       <Equipe name="Guilherme Costa" cargo="Desenvolvedor" idade="32" mida-social="Instagran" search-midia="@guilhermecosta"/>
  //       <Equipe name="Zaca Costa" cargo="Designer" idade="20" mida-social="Instagran" search-midia="@zacacosta"/>
  
  //       <p>========AULA 35 CLASS COMPONENTS========</p>
  //       <ClassEquipe />
  //     </div>
  //   )
  // }
  


export default Equipe;
