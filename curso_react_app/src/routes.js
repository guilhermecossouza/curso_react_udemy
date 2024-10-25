import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./aulas/secao_7_react_avancado/componentes/Header";
import Home from "./aulas/secao_7_react_avancado/pages/Home";
import Sobre from "./aulas/secao_7_react_avancado/pages/Sobre";
import Contato from "./aulas/secao_7_react_avancado/pages/Contato";
function RoutesApp() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/> 
                <Route path="/sobre" element={<Sobre /> } />
                <Route path="/contato" element={<Contato /> } />
            </Routes>
        </Router>
    );
}

export default RoutesApp;