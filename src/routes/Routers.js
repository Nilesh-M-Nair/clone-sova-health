import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import HowItWorks from "../pages/HowItWorks/HowItWorks"; 

export default function Routers() {
  return (
    <Router>
      <Navbar/>
      <span>
        <Switch>
          <Route exact path="/" component ={Home}/>
          <Route exact path="/howitworks" component ={HowItWorks}/>
          <Route exact path="/pricing"component={UnderDevelopment} />
          <Route exact path="/science"component={UnderDevelopment} />
          <Route exact path="/faqs" component={UnderDevelopment} />
          <Route exact path="/aboutus" component={UnderDevelopment} />
          <Route path="/" component={Errorpage}/>
        </Switch>
      </span>
    </Router>
  );
}

function UnderDevelopment() {
  return(
    <div>
      <Link to="/">Go back to home page</Link>
      <p>Under Development</p>
    </div>
    
  )
}
function Errorpage() {
  return(
    <div>
      <Link to="/">Go back to home page</Link>
      <p>Something went worng!</p>
    </div>
    
  )
}