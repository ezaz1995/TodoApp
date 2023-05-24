import { Status } from "../../Interfaces";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const NavLink = ({ to, children, ...props }: any) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "not__active"}>
      <Link className="nav__link" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

const TodoNav = ({ allTodos, allActive, allCompleted }: Status) => {
  return (
    <nav className="nav__container">
      <NavLink to="/">All ({allTodos})</NavLink>
      <NavLink to="/active">Active ({allActive})</NavLink>
      <NavLink to="/completed">Completed ({allCompleted})</NavLink>
    </nav>
  );
};

export default TodoNav;
