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
          display: "flex",
          backgroundColor: "#7d1211",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          fontSize: "25px",
        }}
      >
        <div className="logo">
          <Link
            to="/"
            style={{
              color: "white",
              display: "grid",
            }}
          >
            Staying Alert
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
