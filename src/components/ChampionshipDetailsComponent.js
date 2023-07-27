import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChampionshipDetailsComponent = () => {
  const [championship, setChampionship] = useState({});
  const params = useParams();
  useEffect(() => {
    fetchChampionship(params.champId);
  }, []);

  const fetchChampionship = (champId) => {
    fetch(`http://localhost:8080/championships/${champId}`)
      .then((response) => response.json())
      .then((data) => setChampionship(data));
  };

  return (
    <h2>{`Champioship details: ${championship.name}, City: ${championship.city}`}</h2>
  );
};

export default ChampionshipDetailsComponent;
