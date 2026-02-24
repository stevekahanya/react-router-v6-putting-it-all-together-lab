import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/directors/new">Add Director</NavLink>
    </nav>
  );
}

export default NavBar; // Ensure this export exists