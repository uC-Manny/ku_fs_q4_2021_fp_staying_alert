import Button from "../buttons/Button";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  return (
    <>
      <div className="dashboard">
        <h1>Welcome kaijudono!</h1>

        <Button buttonStyle="btn-success">
          <Link
            style={{
              color: "white",
            }}
            to="/create_person"
          >
            Create Person
          </Link>
        </Button>
        {"  "}
        <Button>
          <Link
            style={{
              color: "white",
            }}
            to="/"
          >
            Logout
          </Link>
        </Button>
        <br />
        <br />
        <Button
          onClick={() => {
            alert("Alert sent to every person in your list!");
          }}
          buttonSize="btn-xl"
          buttonStyle="btn-danger"
        >
          Send Alert!
        </Button>
      </div>
    </>
  );
}
