import ChampionshipsListComponent from './components/ChampionshipsListComponent';
import PlayersListComponent from './components/PlayersListComponent';
import PlayerDetailsComponent from './components/PlayerDetailsComponent';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './RootLayout';
import TeamsListComponent from './components/TeamsListComponent';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {path: "/", element: <ChampionshipsListComponent />},
        {path: "players", element: <PlayersListComponent />},
        {path: 'players/:playerId', element: <PlayerDetailsComponent /> },
        {path: "teams", element: <TeamsListComponent />}
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
