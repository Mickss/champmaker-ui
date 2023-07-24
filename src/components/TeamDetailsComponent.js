import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeamDetailsComponent = () => {
  const [team, setTeam] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchTeam(params.teamId);
  }, []);

  const fetchTeam = (teamId) => {
    fetch(`http://localhost:8080/teams/${teamId}`)
      .then((response) => response.json())
      .then((data) => setTeam(data));
  };

  return (
    <h2>{`Team details: ${team.name}`}</h2>
  );
};

export default TeamDetailsComponent;
