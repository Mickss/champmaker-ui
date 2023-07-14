import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PlayerDetailsComponent = () => {
  const [player, setPlayer] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchPlayer(params.playerId);
  }, []);

  const fetchPlayer = (playerId) => {
    fetch(`http://localhost:8080/players/${playerId}`)
      .then((response) => response.json())
      .then((data) => setPlayer(data));
  };

  return (
    <h2>{`Player details: ${player.name}, shirt number: ${player.shirtNumber}`}</h2>
  );
};

export default PlayerDetailsComponent;
