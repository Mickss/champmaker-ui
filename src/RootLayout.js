import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <>
      <div className="App">
        <MainNavigation />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
