import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Button from "../buttons/Button";
import { MyTextInput } from "./Form";

export default function CreatePersonForm() {
   const [first_name, setFirst_name] = useState("");
   const [last_name, setLast_name] = useState("");
   const [pref_name, setPref_name] = useState("");
   const [phone, setPhone] = useState("");
   const [email_addr, setEmail_addr] = useState("");
   const [checkInContacts, setCheckInContacts] = useState(1);
   const [assistAlertContacts, setAssistAlertContacts] = useState(1);
   const [person_is_self, setPerson_is_self] = useState(false);

   const user_id = 1;
   const assist_id = 1;

   const removed = false;

   // async function getPersonList(event) {
   //    // event.preventDefault();
   //    const response = await fetch("http://localhost:1337/api/person/list", {
   //      method: "POST",
   //      headers: {
   //        "Content-Type": "application/json",
   //      },
   //    });
      
   //    return await response.json();
   // }

   // const person_list = getPersonList();

   // console.log("Person List = " + person_list)

   async function addPerson(event) {
      // event.preventDefault();
      console.log("FE: Add Person Called!!!")
      const response = await fetch("http://localhost:1337/api/person/create", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            user_id,
            first_name,
            last_name,
            pref_name,
            phone,
            email_addr,
            checkInContacts,
            assistAlertContacts,
            person_is_self,
            assist_id,
            removed,
         }),
      });
      console.log("FE: Add Person POST request sent!!!")

      const data = await response.json();
      console.log("data is...", data);
      alert("Person Added!!!")
   }

   return (
      <Formik
         initialValues={{
            first_name: "",
            last_name: "",
            pref_name: "",
            phone: "",
            email_addr: "",
            checkInContacts: 0,
            assistAlertContacts: 0,
            person_is_self: false,
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
               onChange={(e) => setFirst_name(e.target.value)}
            />
            <MyTextInput
               name="last_name"
               type="text"
               placeholder="Last Name"
               value={last_name}
               onChange={(e) => setLast_name(e.target.value)}
            />
            <MyTextInput
               name="pref_name"
               type="text"
               placeholder="Preferred Name"
               value={pref_name}
               onChange={(e) => setPref_name(e.target.value)}
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
               onChange={(e) => setEmail_addr(e.target.value)}
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
                  onChange={(e) => setPerson_is_self(e.target.value)}
               />
               Indicate as SELF
            </label>
            <br />
            <br />
            <Button
               buttonStyle="btn-success"
               buttonSize="btn-md"
               type="submit"
            >
               Add Person
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
