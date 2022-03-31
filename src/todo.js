import React from "react";
import CreatProject from "./pages/CreateProject";
import { Route, Switch, Router } from "react-router";
import User from "./pages/User";
import About from "./pages/About";
import Home from "./pages/Home";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/user">
            <User />
          </Route>
        </Switch>
      </Router>
      <CreatProject />
    </div>
  );
}
