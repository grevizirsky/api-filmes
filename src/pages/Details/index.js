import { useParams } from "react-router-dom"

function Details() {

    const { id } = useParams()

    return (
        <h1>Pagina de detalhes</h1>
    )
}

export default Details