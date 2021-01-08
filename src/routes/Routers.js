import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import HowItWorks from "../pages/HowItWorks"; 

export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/howitworks">
            <HowItWorks/>
          </Route>
          <Route path="/pricing">
            <Development />
          </Route>
          <Route path="/science">
            <Development />
          </Route>
          <Route path="/faqs">
            <Development />
          </Route>
          <Route path="/aboutus">
            <Development />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Development() {
  return(
    <div>
      <Link to="/">Go back to home page</Link>
      <p>Under Development</p>
    </div>
    
  )
}