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
