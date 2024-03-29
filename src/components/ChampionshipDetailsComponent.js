import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ChampionshipDetailsComponent = () => {
  const [championship, setChampionship] = useState();
  const params = useParams();
  useEffect(() => {
    fetchChampionship(params.champId);
  }, []);

  const fetchChampionship = (champId) => {
    fetch(`http://localhost:25001/championships/${champId}`)
      .then((response) => response.json())
      .then((data) => setChampionship(data));
  };

  const shuffleTeams = () => {
    fetch(
      `http://localhost:25001/championships/${params.champId}/shuffle-teams`,
      {
        method: "put",
      }
    );
  };

  const schedule = () => {
    fetch(`http://localhost:25001/championships/${params.champId}/schedule`, {
      method: "post",
    });
  };

  return championship ? (
    <>
      <h2>{`Champioship details: ${championship.name}, City: ${championship.city}`}</h2>
      <div>
        <button onClick={shuffleTeams}>Shuffle teams</button>
      </div>
      <div>
        <button onClick={schedule}>Shedule championship</button>
      </div>
      <h2>Registered teams</h2>
      <ul>
        {championship.registeredTeams.map((registeredTeam) => (
          <li key={registeredTeam.id}>
            <Link
              to={
                `../championships/${params.champId}/teams/` +
                String(registeredTeam.id)
              }
            >
              {registeredTeam.name}
            </Link>
            <span> Group: {registeredTeam.champGroup} </span>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <h2>Loading championship...</h2>
  );
};

export default ChampionshipDetailsComponent;
