import { useParams, Link } from "react-router-dom"

export default function Produto () {
    const { id } = useParams();
    return(
        <div>
            <h1>Produto {id}</h1>
            <div>
                <p>Sujesto produto</p>
            </div>
            <div>
               <Link to="/produto/2">Ir para o produto 2</Link>
            </div>
        </div>
    );
}