import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CodePracticePage from "./components/pages/CodePracticePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import CreatePersonPage from "./components/pages/CreatePersonPage";
import CreateAssistAlertPage from "./components/pages/CreateAssistAlertPage";
import DashboardPage from "./components/pages/DashboardPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Header />
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
            <Route exact path="/create_person">
              <CreatePersonPage />
            </Route>
            <Route exact path="/create_assist_alert">
              <CreateAssistAlertPage />
            </Route>
            <Route exact path="/code_practice">
              <CodePracticePage />
            </Route>
            <Route exact path="/logged_in">
              <DashboardPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
