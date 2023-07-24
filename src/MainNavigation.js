import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Championships
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Teams
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/players"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Players
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
