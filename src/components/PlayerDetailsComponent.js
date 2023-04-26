import { useParams } from "react-router-dom"

const PlayerDetailsComponent = () => {

    const params = useParams();

    return <h2>Player details: {params.playerId}</h2>
}

export default PlayerDetailsComponent;