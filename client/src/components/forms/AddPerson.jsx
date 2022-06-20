import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../buttons/Button";
import { MyTextInput } from "./Form";

export default function AddPersonForm() {
   const [first_name, setfirst_name] = useState("");
   const [last_name, setlast_name] = useState("");
   const [pref_name, setpref_name] = useState("");
   const [phone, setPhone] = useState("");
   const [email_addr, setemail_addr] = useState("");
   const [checkInContacts, setCheckInContacts] = useState("");
   const [assistAlertContacts, setAssistAlertContacts] = useState("");
   const [person_is_self, setperson_is_self] = useState("");

   async function addPerson(event) {
      // event.preventDefault();
      const response = await fetch("http://localhost:1337/api/addPerson", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            first_name,
            last_name,
            pref_name,
            phone,
            email_addr,
            checkInContacts,
            assistAlertContacts,
            person_is_self,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
   }
   return (
      <Formik
         initialValues={{
            first_name: "",
            last_name: "",
            pref_name: "",
            phone: "",
            email_addr: "",
            checkInContacts: "",
            assistAlertContacts: "",
            person_is_self: "",
         }}
         onSubmit={addPerson}
      >
         <Form className="form-box">
            <div className="form-name">
               <h2>Add Person</h2>
            </div>
            <MyTextInput
               name="first_name"
               type="text"
               placeholder="First Name"
               value={first_name}
               onChange={(e) => setfirst_name(e.target.value)}
            />
            <MyTextInput
               name="last_name"
               type="text"
               placeholder="Last Name"
               value={last_name}
               onChange={(e) => setlast_name(e.target.value)}
            />
            <MyTextInput
               name="pref_name"
               type="text"
               placeholder="Preferred Name"
               value={pref_name}
               onChange={(e) => setpref_name(e.target.value)}
            />
            <MyTextInput
               name="phone"
               type="tel"
               placeholder="Phone Number"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
            />
            <MyTextInput
               name="email_addr"
               type="email_addr"
               placeholder="email_addr Address"
               value={email_addr}
               onChange={(e) => setemail_addr(e.target.value)}
            />
            <select className="form-field form-select">
               <option value="" label="Select Check-In Contact(s)"></option>
               <option
                  value={checkInContacts}
                  label="...data from array"
                  onChange={(e) => setCheckInContacts(e.target.value)}
               ></option>
            </select>
            <br />
            <select className="form-field form-select">
               <option value="" label="Select Assist Alert Contact(s)"></option>
               <option
                  value={assistAlertContacts}
                  label="...data from array"
                  onChange={(e) => setAssistAlertContacts(e.target.value)}
               ></option>
            </select>
            <br />
            <label>
               <Field
                  type="checkbox"
                  name="person_is_self"
                  value={person_is_self}
                  onChange={(e) => setperson_is_self(e.target.value)}
               />
               Indicate as SELF
            </label>
            <br />
            <br />
            <Button
               onClick={() => {
                  console.log("The Add button was clicked");
               }}
               buttonStyle="btn-success"
               buttonSize="btn-md"
               type="submit"
            >
               Add
            </Button>
            <Button
               onClick={() => {
                  console.log("The cancel button was clicked");
               }}
               buttonStyle="btn-danger"
               buttonSize="btn-md"
               type="button"
            >
               Cancel
            </Button>
         </Form>
      </Formik>
   );
}
