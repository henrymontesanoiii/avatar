import React, { Component } from "react";
import JokeAPI from "../../utils/JokeAPI";

class Jokes extends Component {
  state = {
    joke: []
  }

  componentDidMount() {
    this.generateJoke();
  }

  generateJoke = () => {
    JokeAPI.getJoke()
      .then(res => this.setState({joke: res.data.joke}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
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