import React from "react";
import Button from "./components/buttons/Button";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import "./App.css";

function App() {
   return (
      <>
         <h1>Register</h1>
         <RegisterForm />
         <LoginForm />
         <h1>Button (Examples)</h1>
         <Button
            onClick={() => {
               console.log("The Register button was clicked");
            }}
            buttonStyle="btn-success"
            buttonSize="btn-sm"
         >
            Register
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The Cancel button was clicked");
            }}
            buttonStyle="btn-danger"
            buttonSize="btn-sm"
         >
            Cancel
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The Test button was clicked");
            }}
            buttonStyle="btn-secondary"
            buttonSize="btn-sm"
         >
            Test
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The Info button was clicked");
            }}
            buttonStyle="btn-info"
            buttonSize="btn-sm"
         >
            Information
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The Delete button was clicked");
            }}
            buttonStyle="btn-warning"
            buttonSize="btn-sm"
         >
            Delete
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The Alert button was clicked");
            }}
            buttonStyle="btn-danger"
            buttonSize="btn-lg"
         >
            Emergency Alert
         </Button>
      </>
   );
}

export default App;
