import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TeamDetailsComponent = () => {
  const [team, setTeam] = useState({});
  const [registeredPlayers, setRegisteredPlayers] = useState([]);
  const params = useParams();
  const teamOnChampionship = params.champId !== undefined;

  useEffect(() => {
    fetchTeam(params.teamId);
    teamOnChampionship && fetchRegisteredPlayers(params.champId, params.teamId);
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
    </>
  );
};

export default TeamDetailsComponent;
