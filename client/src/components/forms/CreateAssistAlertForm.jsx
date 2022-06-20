import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../buttons/Button";
import { MyTextInput, TextPanel } from "./Form";

export default function CreateAssistAlertForm() {
   const user_id = 0;
   const removed = false;
   const [person_id_num, setPerson_id_num] = useState(null);
   const [criticalInfo, setCriticalInfo] = useState("");
   
   const history = useHistory();

   const cancelRouteChange = () => {
      let path = '/';
      history.push(path);
   }

   const createRouteChange = cancelRouteChange;

   async function createAssistAlert(event) {
      // event.preventDefault();
      console.log("Reached The Create Assistance Alert Event")
      const response = await fetch("http://localhost:1337/api/assistance/create", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            user_id,
            person_id_num,
            criticalInfo,
            removed,
         }),
      });

      const data = await response.json();
      console.log("data is...", data);
      if(data.status === "ok")
         alert("Assitance Alert Successfully Created")
      else
         alert(data.error)
      createRouteChange();
   }
   return (
      <Formik
         initialValues={{ user_id: 0, person_2_assist_id: 0, critial_info_msg: "", removed: false }}
         onSubmit={createAssistAlert}
      >
         <Form className="form-box">
           <div className="form-name">
             <h2>Create Assistance Alert</h2>
           </div>
           <MyTextInput
               name="person_2_assist_id"
               type="number"
               placeholder="Enter A Valid Person ID #"
               value={person_id_num}
               onChange={(e) => setPerson_id_num(e.target.value)}
            />
            <TextPanel
               name="critial_info_msg"
               type="text"
               rows = "25"
               cols = "70"
               placeholder="Enter CRITICAL that can and needs to be shared with a total stranger assiting the person related to this assitance alert."
               value={criticalInfo}
               onChange={(e) => setCriticalInfo(e.target.value)}
            />
            <div>

            <Button
               onClick={() => {}}
               buttonStyle="btn-success"
               buttonSize="btn-md"
               type="submit"
               >
               Create
            </Button>
            <Button
               onClick={cancelRouteChange}
               buttonStyle="btn-warning"
               buttonSize="btn-md"
               type="button"
               >
               Cancel
            </Button>
            </div>
         </Form>
      </Formik>
   );
}
