import React, {Component} from 'react';
import wallpaper from "../../wallpaper.json";
import {Link, NavLink} from "react-router-dom";
import API from "../../utils/API";



class Nav extends Component {
  state = {
    isLoggedIn: false,
    username: ""
  }

  // Check login status on load
  componentDidMount() {
    this.loginCheck();
  }

  // Check login status
  loginCheck = () => {
    API
      .loginCheck()
      .then(res => {
        console.log("Login Check:")
        console.log(res.data);
        this.setState({
          isLoggedIn: res.data.isLoggedIn, username: res.data.username
        })
        
      }
      )
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
        
      })
  }

  logout = () => {
    API
    .logout()
    .then(res => {
      console.log("Logged Out")
      console.log(res.data);
      this.setState({
        isLoggedIn: res.data.isLoggedIn, username: ""
      });
      this.loginCheck();
      window.location.href = "/login";
     
  })}

  

render () {
  console.log("Navbar State:")
console.log(this.state);
  let button;
  if (!this.state.isLoggedIn) {
    button = <NavLink className="nav-link" to="/login">Login</NavLink>;
  } else {
    button = <button type="button" className="btn btn-danger" onClick = {this.logout}>Logout</button>;
  }
return (

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">Navbar</Link>
   
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Change Wallpaper
  </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" key={wallpaper[1].id}
          id={wallpaper[1].id}
          name={wallpaper[1].name}
          image={wallpaper[1].image}
          onClick={()=> this.props.handleClicked(wallpaper[1].id)}>Winter</a>
        <a className="dropdown-item" key={wallpaper[2].id}
          id={wallpaper[2].id}
          name={wallpaper[2].name}
          image={wallpaper[2].image}
          onClick={()=> this.props.handleClicked(wallpaper[2].id)}>Summer</a>
        <a className="dropdown-item" key={wallpaper[3].id}
          id={wallpaper[3].id}
          name={wallpaper[3].name}
          image={wallpaper[3].image}
          onClick={()=> this.props.handleClicked(wallpaper[3].id)}>Autumn</a>
          <a className="dropdown-item" key={wallpaper[4].id}
          id={wallpaper[4].id}
          name={wallpaper[4].name}
          image={wallpaper[4].image}
          onClick={()=> this.props.handleClicked(wallpaper[4].id)}>Spring</a>
      </div>
    </div>

    <div className="collapse navbar-collapse ">
      <div className="navbar-nav ">
        <li className="nav-item active">
          <NavLink className="nav-item nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </li>
        
        <li className="nav-item">
          {button}
        </li>
      </div>
    </div>
    
  </nav>
)

}}


  ;

export default Nav;
