import React, { Component } from 'react';
import Clock from 'react-clock';
import "./Clock.css";
 
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
      <div className = "row justify-content-center">
        <div className="col-12 col-sm-2 text-center clock-div">

            <h3>Current time:</h3>
            <Clock
              value={this.state.date}
            />

        </div>
      </div>
    );
  }
}
export default avatarClock;