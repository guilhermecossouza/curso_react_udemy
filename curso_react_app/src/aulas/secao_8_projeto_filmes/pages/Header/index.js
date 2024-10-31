import { Link } from "react-router-dom"


export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Prime Flix</Link>
                    <ul className="nav justify-content-center">                        
                        <li className="nav-item">
                            <Link className="nav-link" to="/link2">Meus filmes</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}