import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NoMatch from "./pages/NoMatch";
import NavTabs from "./components/Navbar";
// import About from "./components/About";
import Weather from "./components/Weather";
import Jeopardy from "./components/Jeopardy";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      {/* <Route exact path="/About" component={About} /> */}
      <Switch>
        <Route exact path="/Weather" component={Weather} />
        <Route path="/Jeopardy" component={Jeopardy} />
        <Route exact path="/" component={Weather} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
