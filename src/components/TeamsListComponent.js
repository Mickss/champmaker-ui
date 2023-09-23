import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TeamListComponent = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = () => {
    fetch("http://localhost:25001/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data));
  };

  return (
    <>
      <h2>The Teams Page</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={String(team.id)}>{team.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamListComponent;
