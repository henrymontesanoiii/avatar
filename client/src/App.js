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
import Jokes from "./components/Jokes";
import Shopping from "./components/Shopping";

const history = createHistory({
  forceRefresh: true
})

const location = history.location;
class App extends Component {
  state = {
    wallpaperImage: wallpaper[0].image,
    wallpapers: wallpaper,
    commandTalk : ""

  }


  commandFromSpeech = (command) => {
       
    let cmdToTalk = "";
    if (command.includes('clock')) {
      history.push('/clock');
      cmdToTalk = "Showing Clock";

    }
    else if (command.includes('weather')) {
      history.push('/weather');
      cmdToTalk = "Showing Weather";
    }
    else if (command.includes('calculator'))
    {
      history.push('/calculator');
      cmdToTalk = "Showing Calculator";
    }
    else if(command.includes('Avatar'))
    {
      history.push('/avatar');
      cmdToTalk = "Create your Avatar";
    }
    else if(command.includes('home'))
    {
      history.push('/home');
      cmdToTalk = "Showing Home page";
    }
    else if(command.includes('trivia'))
    {
      history.push('/jeopardy');
      cmdToTalk = "Play your Trivia";
    }
    this.setState({commandTalk:cmdToTalk});
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
    <Router>
      <div  >
        <Nav command={this.commandFromSpeech} handleClicked={this.handleClicked} />
        <Talk commandtoTalk ={this.state.commandTalk} ></Talk>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/clock" component={avatarClock} />
            <Route exact path="/calculator" component={avatarCalculator} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/jeopardy" component={Jeopardy} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/avatar" component={AvatarCreate} />      
            <Route exact path="/jokes" component={Jokes} />      
            <Route exact path="/shopping" component={Shopping} />            
          </Switch>
        </div>
      </div>
    </Router>
  )
}
};


export default App;
