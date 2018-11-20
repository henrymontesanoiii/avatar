import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AvatarCreater from "./pages/AvatarCreater/AvatarCreater";
// import CreateAvatar from "./pages/CreateAvatar/CreateAvatar";
import AvatarWithTabs from "./pages/AvatarWithTabs/AvatarWithTabs";
import Home from './pages/Home/Home'
const App = () => (
  <div>
    <Router>
    <Switch>
    {/* <Route exact path="/" component={AvatarWithTabs} /> */}
    <Route exact path="/" component={Home} />
    </Switch>
    </Router>
  </div>
);

export default App;
