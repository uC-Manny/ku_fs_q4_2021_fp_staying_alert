import { Link } from "react-router-dom";

const NavBar = () => {
   return (
      <nav className="navbar">
         <div className="links">
            <Link to="/">Home</Link>

            <Link to="/register">Register</Link>

            <Link to="/create_person">Create Person</Link>

            <Link to="/create_assist_alert">Create Assistance Alert</Link>

            <Link to="/logged_in">Dashboard</Link>

            <Link to="/code_practice">Code Practice</Link>
         </div>
      </nav>
   );
};

export default NavBar;
