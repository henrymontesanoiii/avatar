import React, { Component } from "react";
import JokeAPI from "../../utils/JokeAPI";

const styles = {
  color: "white",
  textShadow: "2px 2px 5px black"
}


class Jokes extends Component {
  state = {
    joke: []
  }

  componentDidMount() {
   // this.generateJoke();
  }

  generateJoke = () => {
    JokeAPI.getJoke()
      .then(res => this.setState({joke: res.data.joke}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container-fluid text-center" style={styles}>
        <h3>
          {this.state.joke}
        </h3>
        <button className="btn btn-primary" onClick={this.generateJoke}>
          Get New Joke
        </button>
      </div>
    )
  }
}

export default Jokes;