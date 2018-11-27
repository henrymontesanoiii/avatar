import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import createHistory from "history/createBrowserHistory";
import "./background.css";

const history = createHistory({
  forceRefresh: true
})

const location = history.location;
class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        console.log(res.data);
        this.setState({isLoggedIn: res.data})
        console.log(location);
        history.push(location);
        //window.location.reload();
        //Get the Avatar
        console.log("USER ID = " + res.data._id);
        API.findAvatar({userid : res.data._id})
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

      })
      .catch(err => alert("Incorrect Username or Password!"));
  }

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center dark-style">
          <form>
            <h3>Login!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username"/>
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
          </form>

        </div>
      </div>
    )
  }
}

export default Login;