import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./aulas/secao_7_react_avancado/componentes/Header";
import Home from "./aulas/secao_7_react_avancado/pages/Home";
import Sobre from "./aulas/secao_7_react_avancado/pages/Sobre";
import Contato from "./aulas/secao_7_react_avancado/pages/Contato";
import Produto from "./aulas/secao_7_react_avancado/pages/Produto";
import Erro from "./aulas/secao_7_react_avancado/pages/Erro"; 

function RoutesApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/sobre" element={<Sobre /> } />
                <Route path="/contato" element={<Contato /> } />
                <Route path="/produto/:id" element={<Produto /> } />

                <Route path="*" element={<Erro/>} />
            </Routes>
        </Router>
    );
}

export default RoutesApp;