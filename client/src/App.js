import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import avatarClock from "./components/Clock/";
import avatarCalculator from "./components/Calculator";
import Nav from "./components/Nav";
import Jeopardy from "./components/Jeopardy";
<<<<<<< HEAD
import Calendar from "./components/Calendar";
=======
import Weather from "./components/Weather";
import wallpaper from "../src/wallpaper.json";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Main from "./containers/Main";
import AvatarCreate from "./pages/AvatarWithTabs/AvatarWithTabs";
import Jokes from "./components/Jokes";
import Shopping from "./components/Shopping";




class App extends Component {
  state = {
    wallpaperImage: wallpaper[0].image,
    wallpapers: wallpaper
    
  }



  handleClicked = (id) => {
    console.log(this.state.wallpaperImage);
    console.log("clicked" + id);
    console.log(this.state);
    let chosenWallpaper = this.state.wallpapers.find(wallpaper => {
      return id === wallpaper.id;
    });
    console.log(chosenWallpaper);
    this.setState({ wallpaperImage: chosenWallpaper.image })

  }

  render() {

    document.body.style.backgroundImage = `url(${this.state.wallpaperImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "auto";

    console.log(this.state);
    return (
>>>>>>> c105a7b416ae331efd6784aebea2b19e75b26138

      <Router >
        <div  >
          <Nav handleClicked={this.handleClicked} />
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/clock" component={avatarClock} />
              <Route exact path="/calculator" component={avatarCalculator} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/jeopardy" component={Jeopardy} />
              <Route exact path="/jokes" component={Jokes} />
              <Route exact path="/shopping" component={Shopping} />
              <Route component={Main} />
              <Route exact path="/avatar" component={AvatarCreate} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
};

<<<<<<< HEAD
const App = () => (
  <Router>
    <div>
      <NavTabs />
      {/* <Route exact path="/About" component={About} /> */}
      <Switch>
        <Route exact path="/Weather" component={Weather} />
        <Route path="/Jeopardy" component={Jeopardy} />
        <Route exact path="/" component={Weather} />
        <Route exact path="/Calendar" component={Calendar} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);
=======
>>>>>>> c105a7b416ae331efd6784aebea2b19e75b26138

export default App;
