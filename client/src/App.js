import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import avatarClock from "./components/Clock/";
import avatarCalculator from "./components/Calculator";
import Nav from "./components/Nav";
import Jeopardy from "./components/Jeopardy";
import Weather from "./components/Weather";
import wallpaper from "../src/wallpaper.json";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Main from "./containers/Main";
import AvatarCreate from "./pages/AvatarWithTabs/AvatarWithTabs";
import Home from "./components/Home";
import Speech from "./pages/WebSpeech/WebSpeech";
import Voice from "./components/Voice";


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
    return (
      <Router >
        <div  >
          <Nav handleClicked={this.handleClicked} />
          <Speech></Speech>
          <Voice></Voice>
          <div>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/clock" component={avatarClock} />
              <Route exact path="/calculator" component={avatarCalculator} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/jeopardy" component={Jeopardy} />
              <Route component={Main} />
              <Route exact path="/avatar" component={AvatarCreate} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
};


export default App;
