import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../Buttons/Button";
import { MyTextInput } from "./Form";

export default function RegisterForm() {
   const [name, setName] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeat_password, setRepeatPassword] = useState("");

   async function registerUser(event) {
      // event.preventDefault();
      const response = await fetch("http://localhost:1337/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name,
            fname,
            lname,
            email,
            password,
            repeat_password,
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
         <Form className="form-box">
            <div className="form-name">
               <h2>Register</h2>
            </div>
            <MyTextInput
               name="user_name"
               type="text"
               placeholder="Username"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <MyTextInput
               name="first_name"
               type="text"
               placeholder="First Name"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
            />
            <MyTextInput
               name="last_name"
               type="text"
               placeholder="Last Name"
               value={lname}
               onChange={(e) => setLname(e.target.value)}
            />
            <MyTextInput
               name="email_addr"
               type="email"
               placeholder="Email Address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <MyTextInput
               name="password_hash"
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <MyTextInput
               name="repeat_password"
               type="password"
               placeholder="Re-enter Password"
               value={repeat_password}
               onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Button
               // This onClick is for testing purposes only
               onClick={() => {
                  console.log("The Register button was clicked");
               }}
               buttonStyle="btn-success"
               buttonSize="btn-md"
               type="submit"
            >
               Register
            </Button>
         </Form>
      </Formik>
   );
}
