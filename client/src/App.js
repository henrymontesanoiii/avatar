import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import avatarClock from "./components/Clock/";
import avatarCalculator from "./components/Calculator";
import Nav from "./components/Nav";
import Jeopardy from "./components/Jeopardy/Jeopardy";
import Weather from "./components/Weather";
import wallpaper from "../src/wallpaper.json";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Main from "./containers/Main";
import AvatarCreate from "./pages/AvatarWithTabs/AvatarWithTabs";
import Jokes from "./components/Jokes";
import Shopping from "./components/Shopping";
import Talk from "./pages/Talk/Talk";
import Home from "./pages/Home/Home";
import createHistory from "history/createBrowserHistory";
import API from "./utils/API";


const history = createHistory({
  forceRefresh: true
})

const location = history.location;
class App extends Component {
  state = {
    wallpaperImage: wallpaper[0].image,
    wallpapers: wallpaper,
    commandTalk : "",
    avatar: 'https://i2.wp.com/fishgame.com/wp-content/uploads/2018/10/1067081-200-1.png?fit=200%2C200&ssl=1',
    isLoggedIn: false,
    username: ""

  }
  componentDidMount(){
    this.loginCheck();
  }
  

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username, avatar: res.data.avatar
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })
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
    else if(command.includes('jokes'))
    {
      history.push('/jokes');
      cmdToTalk = "Here you go.... Laugh at your jokes";
    }
    else if(command.includes('shopping'))
    {
      history.push('/shopping');
      cmdToTalk = "Lets do some shopping";
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
      <div >
        <Nav command={this.commandFromSpeech} handleClicked={this.handleClicked} />
        <Talk commandtoTalk ={this.state.commandTalk} ></Talk>
        <div className = "row">
        <div className = "col-9">
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
          <div className = "col-3 text-right">
          <img src = {this.state.avatar}></img>
          </div>
        </div>
        
      </div>
    </Router>
  )
}
};


export default App;
