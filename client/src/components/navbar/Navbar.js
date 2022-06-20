import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Staying Alert</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/register">Register</Link>
        <br></br>
        <Link to="/create_person">Create Person</Link>
        <br></br>
        <Link to="/create_assist_alert">Create Assistance Alert</Link>
        <br></br>
        <Link to="/code_practice">Code Practice</Link>
        <br></br>
        <Link to="/logged_in">Dashboard</Link>
      </div>
    </nav>
  );
};

export default NavBar;
