import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from "./aulas/secao_8_projeto_filmes/pages/Header"
import Home from './aulas/secao_8_projeto_filmes/pages/Home';
import Filme from './aulas/secao_8_projeto_filmes/pages/Filme';

export default function RoutesApp () {
    return(
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filme />} />
            </Routes>
        </Router>
    )
}