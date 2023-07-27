import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const ChampionshipsListComponent = () => {

    const nameInputRef = useRef();
    const cityInputRef = useRef();

    const [championships, setChampionships] = useState([]);

  useEffect(() => {
    fetchChampionships();
  }, []);

  const fetchChampionships = () => {
    fetch("http://localhost:8080/championships")
      .then((response) => response.json())
      .then((data) => setChampionships(data));
  };

    const createChampionship = () => {
        const championshipData = {
          name: nameInputRef.current.value,
          city: cityInputRef.current.value,
        }

        fetch("http://localhost:8080/championships", {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(championshipData)
        });
      }    

    return (
        <>
            <h2>Championship list</h2>
            <ul>
        {championships.map((championship) => (
          <li key={championship.id}>
            <Link to={String(championship.id)}>{championship.name}</Link>
          </li>
        ))}
      </ul>
            <h2>Create championship</h2>
            <div>
                <label htmlFor="name" >Name </label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div>
                <label htmlFor="city">City </label>
                <input type="text" id="city" ref={cityInputRef} />
            </div>
            <button onClick={createChampionship}>Create championship</button>
        </>
    );
}

export default ChampionshipsListComponent;
