import React, { Component } from 'react';
import Clock from 'react-clock';
 
class avatarClock extends Component {
  state = {
    date: new Date(),
  }
 
  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }
 
  render() {
    return (
      <div className = "container ml-5">
        <p>Current time:</p>
        <Clock
          value={this.state.date}
          size = {250}
        />
      </div>
    );
  }
}
export default avatarClock;