import React, { useState } from "react";
import Button from "./components/buttons/Button";
import "./App.css";

function App() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function registerUser(event) {
      event.preventDefault();
      const response = await fetch("http://localhost:1337/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            email,
            password,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
   }

   return (
      <div>
         <h1>Register</h1>
         <form onSubmit={registerUser}>
            <input
               type="text"
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <br />
            <input type="submit" value="Register" />
         </form>
         {/* Button Testing Begins */}
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Register button was clicked");
               }}
               buttonStyle="btn-success"
               buttonSize="btn-sm"
            >
               Register
            </Button>
         </div>
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Cancel button was clicked");
               }}
               buttonStyle="btn-danger"
               buttonSize="btn-sm"
            >
               Cancel
            </Button>
         </div>
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Test button was clicked");
               }}
               buttonStyle="btn-secondary"
               buttonSize="btn-sm"
            >
               Test
            </Button>
         </div>
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Info button was clicked");
               }}
               buttonStyle="btn-info"
               buttonSize="btn-sm"
            >
               Information
            </Button>
         </div>
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Delete button was clicked");
               }}
               buttonStyle="btn-warning"
               buttonSize="btn-sm"
            >
               Delete
            </Button>
         </div>
         <br />
         <div>
            <Button
               onClick={() => {
                  console.log("The Alert button was clicked");
               }}
               buttonStyle="btn-danger"
               buttonSize="btn-lg"
            >
               Emergency Alert
            </Button>
         </div>

         {/* Button Testing Ends */}
      </div>
   );
}

export default App;
