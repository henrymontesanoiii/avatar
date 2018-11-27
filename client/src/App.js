import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import avatarClock from "./components/Clock/";
import avatarCalculator from "./components/Calculator";
import Nav from "./components/Nav";
import Jeopardy from "./components/Jeopardy/Jeopardy";
import Weather from "./components/Weather/Weather";
import wallpaper from "../src/wallpaper.json";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AvatarCreate from "./pages/AvatarWithTabs/AvatarWithTabs";
import Jokes from "./components/Jokes/Jokes";
import Shopping from "./components/Shopping";
import Talk from "./pages/Talk/Talk";
import Home from "./pages/Home/Home";
import createHistory from "history/createBrowserHistory";

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
    else if(command.includes('joke'))
    {
      history.push('/jokes');
      cmdToTalk = "Here you go.";
    }
    else if(command.includes('shopping'))
    {
      history.push('/shopping');
      cmdToTalk = "Lets do some shopping";
    }
    else 
    {
      cmdToTalk= "";
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
            <Route exact path="/signup" component={Signup}/> 
            <Route exact path="/login" component={Login}/>          
          </Switch>
        </div>
      </div>
    </Router>
  )
}
};


export default App;
