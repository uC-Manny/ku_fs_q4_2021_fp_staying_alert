import React from "react";
import Button from "./components/buttons/Button";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import "./App.css";

function App() {
   return (
      <>
         <RegisterForm />
         <LoginForm />
         <h2>Button Styles</h2>
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-primary"
            buttonSize="btn-sm"
         >
            btn-primary
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-secondary"
            buttonSize="btn-sm"
         >
            btn-secondary
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-warning"
            buttonSize="btn-sm"
         >
            btn-warning
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-danger"
            buttonSize="btn-sm"
         >
            btn-danger
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-success"
            buttonSize="btn-sm"
         >
            btn-success
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-info"
            buttonSize="btn-sm"
         >
            btn-info
         </Button>{" "}
         <h2>Button Sizes</h2>
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-primary"
            buttonSize="btn-sm"
         >
            btn-sm
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-primary"
            buttonSize="btn-md"
         >
            btn-md
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-primary"
            buttonSize="btn-lg"
         >
            btn-lg
         </Button>{" "}
         <Button
            onClick={() => {
               console.log("The button was clicked");
            }}
            buttonStyle="btn-primary"
            buttonSize="btn-xl"
         >
            btn-xl
         </Button>{" "}
      </>
   );
}

export default App;
