import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CodePracticePage from "./components/pages/CodePracticePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import CreateAssistAlertPage from "./components/pages/CreateAssistAlertPage";


function App() {
   return (
      <>
      <Router>
         <Navbar />
         <div className = "App">
            <div>
               <h1>Staying Alert</h1>
            </div>
            <Switch>

               <Route exact path = "/">
                  <LoginPage />               
               </Route>
               <Route exact path = "/register">
                  <RegisterPage />               
               </Route>
               <Route exact path = "/create_assist_alert">
                  <CreateAssistAlertPage />               
               </Route>
               <Route exact path = "/code_practice">
                  <CodePracticePage />               
               </Route>
            </Switch>

         </div>
      </Router>
      </>
   );
}

export default App;
