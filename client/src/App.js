import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import avatarClock from "./components/Clock/";
import avatarCalculator from "./components/Calculator";
import Nav from "./components/Nav";
import Jeopardy from "./components/Jeopardy";
import Weather from "./components/Weather";
import wallpaper from "../src/wallpaper.json";
import Jokes from "./components/Jokes";




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
    
    console.log(this.state);
    return (
      
      <Router >
        <div  >
          <Nav handleClicked={this.handleClicked}/>
          <div>
            <Switch>
              <Route exact path="/clock" component={avatarClock} />
              <Route exact path="/calculator" component={avatarCalculator} />
              <Route exact path="/weather" component={Weather} />
              <Route exact path="/jeopardy" component={Jeopardy} />
              <Route exact path="/joke" component={Jokes} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
};


export default App;
