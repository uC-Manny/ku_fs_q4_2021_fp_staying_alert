import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../buttons/Button";
import { MyTextInput } from "./Form";

export default function RegisterForm() {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   async function registerUser(event) {
      // event.preventDefault();
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
      <Formik
         initialValues={{ user_name: "", email_addr: "", password_hash: "" }}
         onSubmit={registerUser}
      >
         <Form>
            <MyTextInput
               label="Name"
               name="user_name"
               type="text"
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <MyTextInput
               label="Email"
               name="email_addr"
               type="email"
               placeholder="Email Address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
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
                  console.log("The Register button was clicked");
               }}
               buttonStyle="btn-success"
               buttonSize="btn-sm"
               type="submit"
            >
               Register
            </Button>
         </Form>
      </Formik>
   );
}
