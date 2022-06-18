import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../Buttons/Button";
import { MyTextInput } from "./Form";

export default function LoginForm() {
   const [uname, setUname] = useState("");
   const [password, setPassword] = useState("");

   async function loginUser(event) {
      // event.preventDefault();
      const response = await fetch("http://localhost:1337/api/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            uname,
            password,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
   }
   return (
      <Formik
         initialValues={{ user_name: "", password_hash: "" }}
         onSubmit={loginUser}
      >
         <Form>
            <MyTextInput
               label="Name"
               name="user_name"
               type="text"
               placeholder="Name"
               value={uname}
               onChange={(e) => setUname(e.target.value)}
            />
            <MyTextInput
               label="Password"
               name="password_hash"
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <Button
               // This onClick is for testing purposes only
               onClick={() => {
                  console.log("The Login button was clicked");
               }}
               buttonStyle="btn-success"
               buttonSize="btn-sm"
               type="submit"
            >
               Login
            </Button>
            <Button
               onClick={() => {
                  console.log("Create Account button was pressed");
               }}
               buttonStyle="btn-info"
               buttonSize="btn-sm"
            >
            Create Account
            </Button>
            <Button
            onClick={() => {
               console.log("The EMERGENCY Alert button was clicked");
            }}
            buttonStyle="btn-danger"
            buttonSize="btn-lg"
         >
            Emergency Alert
         </Button>
         </Form>
      </Formik>
   );
}
