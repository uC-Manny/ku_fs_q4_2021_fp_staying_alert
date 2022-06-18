import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../buttons/Button";
import { MyTextInput } from "./Form";

export default function RegisterForm() {
   const [uname, setUname] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rpassword, setRpassword] = useState("");

   async function registerUser(event) {
      // event.preventDefault();
      const response = await fetch("http://localhost:1337/api/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            uname,
            fname,
            lname,
            email,
            password,
            rpassword,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
      if(data.status === "ok")
         alert("Account Successfully Created")
      else
         alert(data.error)
   }
   return (
      <Formik
         initialValues={{ user_name: "", first_name: "", last_name: "", email_addr: "", password_hash: "", rpassword: "" }}
         onSubmit={registerUser}
      >
         <Form className="form-box">
           <div className="form-name">
             <h2>Register</h2>
           </div>
         <MyTextInput
               label="User Name: "
               name="user_name"
               type="text"
               placeholder="User Name"
               value={uname}
               onChange={(e) => setUname(e.target.value)}
            />
            <MyTextInput
               label="First Name: "
               name="first_name"
               type="text"
               placeholder="First Name"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
            />
            <MyTextInput
               label="Last Name: "
               name="last_name"
               type="text"
               placeholder="Last Name"
               value={lname}
               onChange={(e) => setLname(e.target.value)}
            />
            <MyTextInput
               label="Email Address: "
               name="email_addr"
               type="email"
               placeholder="Email Address"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <MyTextInput
               label="Password: "
               name="password_hash"
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <MyTextInput
               label="Repeat Password: "
               name="rpassword"
               type="password"
               placeholder="Re-enter Password"
               value={rpassword}
               onChange={(e) => setRpassword(e.target.value)}
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
               Create Account
            </Button>
         </Form>
      </Formik>
   );
}
