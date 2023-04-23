import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [champs, setChamps] = useState([])

  useEffect(() => {
    fetchChamps()
  }, [])

  const fetchChamps = () => {
    fetch("http://localhost:8080/championships")
      .then((response) => response.json())
      .then((data) => setChamps(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Frisbee championships</h2>
        {champs.map((champ, index) => (
          <div key={index}>
            {`${champ.name} - ${champ.city} - ${champ.date}`}
          </div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
