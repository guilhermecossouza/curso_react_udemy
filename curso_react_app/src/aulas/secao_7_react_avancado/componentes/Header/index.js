
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
        </div>
    );
}