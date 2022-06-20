// this is just an example, we don't have to use it, but it
// is a good component to run on the top of every page
// we need at least the red Stay alert banner and the user icon
// when logged in

import { FaSignInAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header
        className="header"
        style={{
          backgroundColor: "#7d1211",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="logo">
          <Link
            to="/api"
            style={{
              color: "white",
            }}
          >
            Staying Alert
          </Link>
        </div>
        <ul>
          <li>
            <Link
              to="/api/login"
              style={{
                color: "white",
              }}
            >
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link
              to="/api/register"
              style={{
                color: "white",
              }}
            >
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
