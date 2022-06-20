import Button from "../buttons/Button";

export default function DashboardPage() {
  return (
    <>
      <div className="dashboard">
        <h1>Welcome User!</h1>
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
