import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PlayersListComponent = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    fetch("http://localhost:8080/players")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  };

  return (
    <>
      <h2>The Players Page</h2>
      <ul>
        {players.map((player) => (
          <li key={player.id}>
            <Link to={String(player.id)}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PlayersListComponent;
