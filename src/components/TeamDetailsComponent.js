import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TeamDetailsComponent = () => {
  const [team, setTeam] = useState({});
  const [registeredPlayers, setRegisteredPlayers] = useState([]);
  const [players, setPlayers] = useState([]);
  const params = useParams();
  const teamOnChampionship = params.champId !== undefined;

  useEffect(() => {
    fetchTeam(params.teamId);
    teamOnChampionship && fetchRegisteredPlayers(params.champId, params.teamId);
    !teamOnChampionship && fetchPlayers(params.teamId);
  }, []);

  const fetchTeam = (teamId) => {
    fetch(`http://localhost:8080/teams/${teamId}`)
      .then((response) => response.json())
      .then((data) => setTeam(data));
  };

  const fetchRegisteredPlayers = (champId, teamId) => {
    fetch(
      `http://localhost:8080/championships/${champId}/registered-players?teamId=${teamId}`
    )
      .then((response) => response.json())
      .then((data) => setRegisteredPlayers(data));
  };

  const fetchPlayers = (teamId) => {
    fetch(`http://localhost:8080/players?teamId=${teamId}`)
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  };

  return (
    <>
      <h2>{`Team details: ${team.name}`}</h2>
      {teamOnChampionship && (
        <ul>
          {registeredPlayers.map((player) => (
            <li key={player.playerId}>
              <Link to={"../../../players/" + String(player.playerId)}>
                {player.playerInfo.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!teamOnChampionship && (
        <ul>
          {players.map((player) => (
            <li key={player.id}>
              <Link to={"../../players/" + String(player.id)}>
                {player.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TeamDetailsComponent;
