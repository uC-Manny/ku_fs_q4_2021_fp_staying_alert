import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "../buttons/Button";
import { MyTextInput } from "./Form";
import { useHistory } from "react-router-dom";

export default function RegisterForm() {
   const removed = false;
   const [uname, setUname] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rpassword, setRpassword] = useState("");

   const history = useHistory();

   const cancelRouteChange = () => {
      let path = '/';
      history.push(path);
   }

   const createRouteChange = cancelRouteChange;

   async function registerUser(event) {
      // event.preventDefault();
      const response = await fetch("http://localhost:1337/api/user/register", {
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
            removed,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
      if(data.status === "ok")
         alert("Account Successfully Created")
      else
         alert(data.error)
      createRouteChange();
   }
   return (
      <Formik
         initialValues={{ user_name: "", first_name: "", last_name: "", email_addr: "", password_hash: "", rpassword: "" }}
         onSubmit={registerUser}
      >
         <Form className="form-box">
           <div className="form-name">
             <h2>Create Account</h2>
           </div>
         <MyTextInput
               name="user_name"
               type="text"
               placeholder="User Name"
               value={uname}
               onChange={(e) => setUname(e.target.value)}
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
               name="rpassword"
               type="password"
               placeholder="Re-enter Password"
               value={rpassword}
               onChange={(e) => setRpassword(e.target.value)}
            />
            <Button
               onClick={() => {}}
               buttonStyle="btn-success"
               buttonSize="btn-md"
               type="submit"
            >
               Create Account
            </Button>
            <Button
               onClick={cancelRouteChange}
               buttonStyle="btn-warning"
               buttonSize="btn-md"
               type="button"
            >
               Cancel
            </Button>
         </Form>
      </Formik>
   );
}
